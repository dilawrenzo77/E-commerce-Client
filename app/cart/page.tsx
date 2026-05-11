"use client"
// import { CartItems } from "@/types/product";
import { steps } from "@/libs/mock-data";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ShippingForm from "../components/ShippingForm";
import PaymentForm from "../components/PaymentForm";
import CartCard from "../components/CartCard";
import { z } from "zod";
import useCartStore from "../store/cartStore";


const shippingFormSchema = z.object({
    name: z.string(),
    address: z.string(),
    phone: z.string(),
    email: z.string(),
    postalCode: z.string()
});
type ShippingFormData = z.infer<typeof shippingFormSchema>;

export default function Page() {
    const {cart} = useCartStore();
    const searchParams =  useSearchParams();
    const router = useRouter();
    const [shippingForm, setShippingForm] = useState<ShippingFormData | null>(null);

    const activeStep = parseInt(searchParams.get("step") || "1");
    
    return <div className="flex flex-col items-center justify-center gap-10 mt-12 w-full">
        {/* TITLE */}
        <h1 className="text-gray-800 text-2xl font-semibold ">YOUR OCTO SHOPPING CART</h1>

        {/* STEPS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-7 lg:gap-20 ">
            {steps.map(step => (
                <div key={step.id} className={`flex items-center justify-center gap-3 border-b-2 pb-5  ${step.id === activeStep ? "" : "opacity-50"}`}>
                    <div className="px-4 py-2 bg-black text-gray-100">
                        {step.id}
                    </div>
                    <p>{step.title}</p>
                    {step.icon}
                </div>
            ))}
        </div>
        {/* CART */}
        <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-5 lg:gap-10 ">
            <div className="w-full lg:w-7/12 px-4 shadow-lg border border-gray-300 flex flex-col gap-5">
                {activeStep === 1 ? 
                    (cart.map(item => (
                        <CartCard item={item} key={item.id}/>
                    ))) :
                    activeStep === 2 ?
                    (<ShippingForm setShippingForm={setShippingForm}/>) :
                    activeStep && shippingForm ? <PaymentForm /> : <p >Please fill in the shipping form to continue on your purchase</p>
                }
            </div>
            <div className="w-full lg:w-5/12 px-5 py-7 shadow-lg border border-gray-300 flex flex-col gap-5">
                <h1 className="text-gray-800 text-lg font-semibold">Cart Details</h1>
                <div className="flex flex-col gap-4 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <p>Subtotal:</p>
                        <p>&#8358; {cart.reduce(
                            (acc,item) =>
                                acc + Number(item.price) * item.quantity, 0
                            ).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Discount(10%):</p>
                        <p className="text-red-400">-&#8358;10</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Shipping Fee:</p>
                        <p>&#8358;20</p>
                    </div>
                </div>
                <hr className="border-gray-200"/>
                <div className="flex justify-between text-sm ">
                        <p>Total:</p>
                        <p>&#8358; {cart.reduce(
                            (acc,item) =>
                                acc + Number(item.price) * item.quantity, 0
                            + 20 - 10).toFixed(2)}</p>
                    </div>
                {activeStep === 1 && cart.length > 0 ?
                <button
                onClick={()=>router.push("/cart?step=2", {scroll: false})} 
                className="w-full cursor-pointer hover:bg-black/60 transition-all duration-300 rounded-sm bg-black py-2 text-md font-semibold flex items-center  justify-center text-white gap-5">Next &rarr;</button>
                :
                <button
                className="w-full cursor-pointer hover:bg-black/60 transition-all duration-300 rounded-sm bg-black/40 py-2 text-md font-semibold flex items-center  justify-center text-white gap-5">Next &rarr;</button>
            }
            </div>
        </div>
    </div>
};
