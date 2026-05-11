// app/api/payment/verify/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // Try to get reference from either parameter
    let reference = searchParams.get('reference') || searchParams.get('trxref');
    
    // console.log('=== PAYMENT VERIFICATION STARTED ===');
    // console.log('All query params:', Object.fromEntries(searchParams.entries()));
    // console.log('Reference found:', reference);
    // console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
    // console.log('PAYSTACK_SECRET_KEY exists:', !!process.env.PAYSTACK_SECRET_KEY);
    
    if (!reference) {
      console.log('No reference provided in query params');
      return NextResponse.redirect(
        new URL('/payment/error?message=No reference provided', process.env.FRONTEND_URL || 'http://localhost:3003')
      );
    }
    
    // Verify the transaction with Paystack
    const verifyUrl = `https://api.paystack.co/transaction/verify/${reference}`;
    console.log('Verifying URL:', verifyUrl);
    
    const response = await fetch(verifyUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
      }
    });
    
    // console.log('Paystack API response status:', response.status);
    
    const data = await response.json();
    console.log('Paystack verification response:', JSON.stringify(data, null, 2));
    
    if (data.status && data.data.status === 'success') {
      console.log('✅ Payment verified successfully!');
      
      // Redirect to success page with reference
      const successUrl = new URL(`/payment/success?reference=${reference}`, process.env.FRONTEND_URL || 'http://localhost:3003');
      // console.log('Redirecting to:', successUrl.toString());
      
      return NextResponse.redirect(successUrl);
    } else {
      console.error('❌ Payment verification failed:', data);
      return NextResponse.redirect(
        new URL(`/payment/error?message=${data.message || 'Payment verification failed'}`, process.env.FRONTEND_URL || 'http://localhost:3003')
      );
    }
    
  } catch (error) {
    console.error('❌ Payment verification error:', error);
    return NextResponse.redirect(
      new URL('/payment/error?message=Verification failed', process.env.FRONTEND_URL || 'http://localhost:3003')
    );
  }
}