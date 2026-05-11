"use client"
// import * as React from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Controller, useForm } from "react-hook-form";
// import * as z from "zod";

// import {
//   Field,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupTextarea,
// } from "@/components/ui/input-group"
// import { ShoppingBasket } from "lucide-react";
// import Image from "next/image";

// const formSchema = z.object({
//         cardHolder: z
//             .string()
//             .min(5, "card holder name must be at least 5 characters.")
//             .max(32, "card holder name must be at most 32 characters."),
//         cardNumber: z
//             .string()
//             .min(16, "card number must be at least 16 characters.")
//             .max(16, "card number must be at most 16 characters."),
//         expiryDate: z
//             .string()
//             .min(1, "Expiration date is required")
//             .regex(
//                 /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
//                 "Expiration date must be in MM/YY format (e.g., 12/25)"
//             )
//             .refine((val) => {
//                 const [month, year] = val.split('/');
//                 const currentDate = new Date();
//                 const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
//                 const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
                
//                 const expMonth = parseInt(month as string, 10);
//                 const expYear = parseInt(year as string, 10);
                
//                 // Check if card is expired
//                 if (expYear < currentYear) return false;
//                 if (expYear === currentYear && expMonth < currentMonth) return false;
//                 return true;
//             }, { message: "Card has expired" }),
//         cvv: z
//             .string()
//             .min(3, "cvv must be at least 3 characters.")
//             .max(3, "cvv must be at most 3 characters."),
// })


// export default function ShippingForm() {
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema as any),
//         defaultValues: {
//           cardHolder: "",
//           cardNumber: "",
//           expiryDate: "",
//         },
//     })

//   function onSubmit(data: z.infer<typeof formSchema>) {

//   }
    
    
//     return <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)} className="px-5 py-7">
//           <FieldGroup>
//             <Controller
//               name="cardHolder"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-name">
//                     <p className="text-sm text-gray-600">Holder name</p>
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="cardHolder"
//                     aria-invalid={fieldState.invalid}
//                     placeholder=""
//                     autoComplete="off"
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />
//             <Controller
//               name="cardNumber"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-address">
//                     <p className="text-sm text-gray-600">Card Number</p>
//                   </FieldLabel>
//                   <InputGroup>
//                     <Input
//                     {...field}
//                     id="cardNumber"
//                     aria-invalid={fieldState.invalid}
//                     placeholder=""
//                     autoComplete="off"
//                   />
//                   </InputGroup>
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />
//             <Controller
//               name="expiryDate"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-phone">
//                     <p className="text-sm text-gray-600">Card Date</p>
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="cardDate"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="MM/YY"
//                     autoComplete="off"
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />
//             <Controller
//               name="cvv"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-address">
//                     <p className="text-sm text-gray-600">CVV</p>
//                   </FieldLabel>
//                   <InputGroup>
//                     <Input
//                     {...field}
//                     id="cvv"
//                     type="password"  //  This makes it secure
//                     aria-invalid={fieldState.invalid}
//                     placeholder="***"
//                     autoComplete="off"
//                     inputMode="numeric"  //  Shows numeric keyboard on mobile
//                     pattern="[0-9]*"  //  Restricts to numbers only

//                   />
//                   </InputGroup>
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />
//           </FieldGroup>
//           <div className="flex items-center gap-4 mt-8">
//             <Image src="/payments/mastercard-svgrepo-com (1).svg" width={50} height={25} alt="Icon 1" className="object-cover" />
//             <Image src="/payments/visa-svgrepo-com.svg" alt="Icon 2" width={50} height={25} className="object-cover" />
//             <Image src="/payments/stripe-svgrepo-com.svg" alt="Icon 3" width={50} height={25} className="object-cover" />
//         </div>
//         <button
//             type="submit"
//             className="w-full cursor-pointer hover:bg-black/60 transition-all duration-300 rounded-sm bg-black py-2 text-md font-semibold flex items-center  justify-center text-white gap-3 mt-8">
//             Checkout<ShoppingBasket className="w-5 h-5"/>
//         </button>
//     </form>
// };


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
          id: item.id,
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