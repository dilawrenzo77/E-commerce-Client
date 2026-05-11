"use client"

import { ProductType } from "../../types/product"
import { Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useCartStore from "../store/cartStore";
import { toast } from "react-toastify";

export default function ProductInteraction({product, selectedSize, selectedColor}:
    {product:ProductType, selectedSize:string, selectedColor:string }) {
    const [quantity, setQuantity] = useState<number>(1);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams  = useSearchParams();
    const {addToCart} = useCartStore();
    
    
    const handleTypeChange = (type:string, value:string) => {
        const params = new URLSearchParams(searchParams);
        params.set(type, value);
        router.push(`${pathname}?${params.toString()}`, {scroll: false})
    }
    
    const handleQunatityChange = (type:"increment" | "decrement") => {
        if (type === "increment") {
            setQuantity(prev => prev + 1);
        }else {
            if(quantity > 1){
                setQuantity(prev => prev - 1);
            }
        };
    }

    const handleAddToCart = () =>{
        addToCart({
            ...product,
            quantity,
            selectedSize,
            selectedColor
        });
        toast.success("OCTO product added to cart");
    }
    return <div className="flex flex-col gap-4 my-8 w-full">
        {/* SIZE */}
        <div className="flex flex-col gap-3 text-sm">
            <span className="text-gray-500">size</span>
            <div className="flex items-center gap-6">
                {product.sizes.map((size) => (
                <div key={size} onClick={()=>handleTypeChange("size", size)}className={` border p-1 ${selectedSize === size ? "border-gray-700" : "border-gray-300"}`}>
                    <div className={`w-6 h-6 flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>
                        {size.toUpperCase()}
                    </div>
                </div>
                ))}
            </div>
        </div>
        {/* color */}
        <div className="flex flex-col gap-3 text-sm">
            <span className="text-gray-500">color</span>
            <div className="flex items-center gap-6">
                {product.colors.map((color) => (
                <div key={color} onClick={()=>handleTypeChange("color", color)} className={` border p-1 rounded-full ${selectedColor === color ? "border-gray-300" : "border-white"}`}>
                    <div className={`w-6 h-6 rounded-full`} style={{backgroundColor:color}}/>
                </div>
                ))}
            </div>
        </div>
        {/* quantity */}
        <div className="flex flex-col gap-3 text-sm">
            <span className="text-gray-500">Quantity</span>
            <div className="flex items-center gap-4">
                <button className="cursor-pointer p-2 border border-gray-300" onClick={()=>handleQunatityChange("decrement")}>-</button>
                <span>{quantity}</span>
                <button className="cursor-pointer p-2 border border-gray-300" onClick={()=>handleQunatityChange("increment")}>+</button>
            </div>
        </div>
        <div className="w-full flex flex-col gap-3 ">
            <button 
            className="w-full py-2 cursor-pointer bg-black hover:bg-black/60 transition-all duration-300 text-white text-md flex items-center justify-center gap-2"
            onClick={handleAddToCart}
            >
                <Plus />
                Add to cart
            </button>
            <button className="w-full py-2 cursor-pointer shadow-lg border border-gray-400 hover:bg-black/80 hover:text-white transition-all duration-300 bg-white text-black text-md flex items-center justify-center gap-2">
                <ShoppingCart />
                Purchase
            </button>
        </div>
    </div>
};
