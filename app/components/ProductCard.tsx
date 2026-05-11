"use client"
import { ProductType } from "../../types/product"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useCartStore from "../store/cartStore"
import { toast } from "react-toastify"

export default function ProductCard({product}: {product: ProductType}) {
    const {addToCart} = useCartStore()
    const [productDetails, setProductDetails] = useState({
        sizes: product.sizes[0],
        color: product.colors[0]
    });

    const handleProductDetails = ({type,value}: {type: "size" | "color", value:string}) => {
        setProductDetails((prev) => ({
            ...prev,
            [type]: value,
        }))
    }

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: 1,
            selectedSize: productDetails.sizes!,
            selectedColor: productDetails.color!
        });
        toast.success("Octo Product Added");
    }

    return <div className="overflow-hidden rounded-lg shadow-lg">
        {/* IMAGES  */}
        <Link href={`/products/${product.id}?color=${productDetails.color}&size=${productDetails.sizes}`}>
            <div className="relative aspect-4/5">
                <Image src={(product.images as Record<string, string>)[productDetails.color!] || ""} fill alt={product.name} className="w-full pb-2 object-contain hover:scale-105 transition-all duration-300"/>
            </div>
        </Link>

        {/* DETAILS */}
        <div className="flex flex-col gap-3 px-2 pb-2">
            <h1 className="font-medium">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.shortDescription}</p>
            <div className="flex items-center gap-6  text-xs">
                {/* SIZES */}
                <div className="flex flex-col gap-1">
                    <span className="text-gray-500">sizes</span>
                    <select 
                    name="sizes" 
                    id="sizes" 
                    className="ring ring-black  px-3 py-1"
                    onChange={e=>handleProductDetails({type:"size", value:e.target.value})}
                    >
                        {product.sizes.map(size=>(
                            <option value={size} key={size}>{size.toUpperCase()}</option>
                        ))}
                    </select>
                </div>
                {/* COLORS */}
                <div className="flex flex-col gap-1">
                    <span className="text-gray-500">colors</span>
                    <div className="flex items-center gap-3">
                        {product.colors.map(color =>(
                            <div 
                            className={`cursor-pointer border ${productDetails.color === color ? "border-gray-600" : "border-gray-200"} rounded-full p-[1.2px]`} 
                            key={color} onClick={()=>handleProductDetails({type:"color", value:color})}>
                                <div className="w-3 h-3 rounded-full " style={{backgroundColor: color}}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* PRICES AND CART */}
            <div className="flex items-center justify-between">
                <p className="font-medium">&#8358; {product.price.toFixed(2)}</p>
                <button onClick={handleAddToCart} className="flex items-center px-5 py-1.5 text-sm ring-1 ring-black  hover:text-white hover:bg-black/80 transition-all duration-300 cursor-pointer">
                    <span className="mr-2"><ShoppingCart /></span>
                    ADD TO CART
                </button>
            </div>
        </div>
    </div>
};
