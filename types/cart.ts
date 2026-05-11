import type { Product } from "./product";

export type CartItemType = Product & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export type CartItemsType = CartItemType[];

export type CartStoreStateType =  {
    cart: CartItemType[]
    hasHydrated: boolean
}

export interface CartStoreActionType {
    addToCart: (product: CartItemType) => void, 
    removeFromCart: (productId: number | string) => void;
    updateQuantity: (productId: number | string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
    setHasHydrated: (value: boolean) => void;
}

export type CartStoreType = CartStoreStateType & CartStoreActionType;