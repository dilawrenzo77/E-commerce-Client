
// components/CartPaymentButton.tsx
"use client"
import { useState, useRef, useEffect } from 'react';

interface CartItem {
  id: string;
  quantity: number;
  price: number;
  name: string;
}

export interface CartPaymentButtonProps {
  cartItems: CartItem[];
  totalAmount: number;
  onSuccess?: (reference: string) => void;
  onClose?: () => void;
  className?: string;
}

export function CartPaymentButton({ 
  cartItems, 
  totalAmount, 
  onSuccess, 
  onClose,
  className = "w-full bg-black text-white py-3 rounded-lg hover:bg-black/80 disabled:opacity-50"
}: CartPaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPaystackReady, setIsPaystackReady] = useState(false);
  const isProcessingRef = useRef(false);

  // Check if Paystack is loaded
  useEffect(() => {
    const checkPaystack = () => {
      if (typeof window !== 'undefined' && (window as any).PaystackPop) {
        console.log('✅ Paystack is ready');
        setIsPaystackReady(true);
      } else {
        console.log('⏳ Waiting for Paystack to load...');
        setTimeout(checkPaystack, 500);
      }
    };
    
    checkPaystack();
  }, []);

  const initializePayment = async () => {
    // Prevent multiple clicks while processing
    if (isProcessingRef.current || loading) {
      console.log('Payment already processing, skipping...');
      return;
    }
    
    if (!isPaystackReady) {
      setError('Payment system is loading. Please try again in a moment.');
      return;
    }
    
    isProcessingRef.current = true;
    setLoading(true);
    setError(null);
    
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/initialize-payment`;
      console.log('Calling endpoint:', endpoint);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ cartItems, totalAmount })
      });

      const data = await response.json();
      console.log('Backend response:', data);

      if (!data.success) {
        throw new Error(data.error || 'Failed to initialize payment');
      }

      // Calculate amount in kobo (use the amount from backend response)
      const amountInKobo = Math.round(data.amount * 100);
      
      console.log('Opening Paystack with:', {
        reference: data.reference,
        email: data.userEmail,
        amount: amountInKobo,
        amountInNaira: data.amount
      });

      // Open Paystack popup
      const handler = (window as any).PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: data.userEmail,
        amount: amountInKobo,
        currency: 'NGN',
        ref: data.reference,
        metadata: {
          cart_items: cartItems,
          total_amount: data.amount,
        },
        callback: (response: any) => {
          // console.log('Payment successful:', response);
           // ✅ Redirect to verification page with reference
          window.location.href = `/api/payment/verify?reference=${response.reference}`;
          onSuccess?.(response.reference);
          isProcessingRef.current = false;
        },
        onClose: () => {
          console.log('Payment modal closed');
          onClose?.();
          isProcessingRef.current = false;
        },
      });
      
      handler.openIframe();

    } catch (err) {
      console.error('Payment initialization error:', err);
      setError(err instanceof Error ? err.message : 'Payment initialization failed');
      isProcessingRef.current = false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button 
        onClick={initializePayment} 
        disabled={loading || !isPaystackReady}
        className={className}
      >
        {loading ? 'Preparing payment...' : 
         !isPaystackReady ? 'Loading payment system...' : 
         `Pay ₦${totalAmount.toFixed(2)}`}
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}