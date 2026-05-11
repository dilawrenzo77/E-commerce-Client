import { CartStoreType} from '../../types/cart';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create<CartStoreType>()(
    persist(
        (set, get) => ({
            // Initial state
            cart: [],
            hasHydrated: false,

            // Add to cart - with duplicate checking
            addToCart: (product) => set((state) => {
                // Check if product already exists in cart (same ID, size, color)
                const existingItem = state.cart.find(
                    item => item.id === product.id && 
                           item.selectedSize === product.selectedSize &&
                           item.selectedColor === product.selectedColor
                );

                if (existingItem) {
                    // Update quantity if item exists
                    return {
                        cart: state.cart.map(item =>
                            item.id === product.id &&
                            item.selectedSize === product.selectedSize &&
                            item.selectedColor === product.selectedColor
                                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                                : item
                        )
                    };
                }

                // Add new item if it doesn't exist
                return { 
                    cart: [...state.cart, { 
                        ...product, 
                        quantity: product.quantity || 1 
                    }] 
                };
            }),

            // Remove from cart by ID
            removeFromCart: (productId) => set((state) => ({
                cart: state.cart.filter(item => item.id !== productId)
            })),

            // Update quantity
            updateQuantity: (productId, quantity) => set((state) => ({
                cart: state.cart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: Math.max(1, quantity) }
                        : item
                )
            })),

            // Clear entire cart
            clearCart: () => set({ cart: [] }),

            // Get total items count
            getTotalItems: () => {
                return get().cart.reduce((total, item) => total + item.quantity, 0);
            },

            // Get total price
            getTotalPrice: () => {
                return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            },

            setHasHydrated: (value) => set({ hasHydrated: value }),

        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({ cart: state.cart }),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.setHasHydrated(true);
                }
            }
        }
    )
);

export default useCartStore;