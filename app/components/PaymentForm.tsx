"use client"


// In your PaymentForm component
// import { CartPaymentButton } from "./CartPaymentButton";
import DynamicCartPaymentButton from "../components/DynamicCartPaymentButton";
import useCartStore from "../store/cartStore";

export default function PaymentForm() {
  const { cart } = useCartStore();
  
  const calculateTotal = () => {
    const subtotal = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
    const discount = 10;
    const shipping = 20;
    return subtotal + shipping - discount;
  };
   console.log(calculateTotal);
  const handlePaymentSuccess = async (reference: string) => {
    // Verify payment and complete order
    console.log('Payment successful with reference:', reference);
    // Clear the cart from your store
    const { clearCart } = useCartStore.getState();
    clearCart(); // Make sure you have this function in your cart store
  
    // Redirect to success page or show success message
  };

  return (
    <div className="px-5 py-7">
      {/* <CartPaymentButton
        cartItems={cart.map(item => ({
          id: item.id,
          name: item.name,
          price: Number(item.price),
          quantity: item.quantity
        }))}
        totalAmount={calculateTotal()}
        onSuccess={handlePaymentSuccess}
      /> */}
      <DynamicCartPaymentButton
        cartItems={cart.map(item => ({
          id: String(item.id),
          name: item.name,
          price: Number(item.price),
          quantity: item.quantity
        }))}
        totalAmount={calculateTotal()}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
}