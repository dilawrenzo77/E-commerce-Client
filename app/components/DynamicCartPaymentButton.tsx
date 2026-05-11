// components/DynamicCartPaymentButton.tsx
"use client"
import dynamic from 'next/dynamic';
import { CartPaymentButtonProps } from './CartPaymentButton';

// Dynamically import the component with SSR disabled
const CartPaymentButton = dynamic(
  () => import('./CartPaymentButton').then((mod) => mod.CartPaymentButton),
  { 
    ssr: false,
    loading: () => (
      <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-black/80 disabled:opacity-50">
        Loading payment...
      </button>
    )
  }
);

export default function DynamicCartPaymentButton(props: CartPaymentButtonProps) {
  return <CartPaymentButton {...props} />;
}