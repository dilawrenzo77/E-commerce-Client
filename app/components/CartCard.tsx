import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { CartItemType } from "../../types/cart";
import useCartStore from "../store/cartStore";
import Link from "next/link";

export default function CartCard({item}: {item: CartItemType}) {
    const {removeFromCart, cart} = useCartStore();
    return <div className="flex gap-8 justify-between px-5 py-7 border-b border-gray-500">
            <div className="relative w-32 h-32">
                <Image src={(item.images as Record<string, string>)[item.selectedColor] || ""} alt="productImage" fill className="object-contain"/>
            </div>
            <div className="flex flex-col items-start gap-4 grow">
                <p className="text-md font-medium mb-1">{item.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-500 mb-1">Size: {item.selectedSize}</p>
                <p className="text-md font-medium">&#8358;{item.price.toFixed(2)}</p>
            </div>
            <div className="">
                <Trash2 key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    onClick={() => removeFromCart(item.id)} className="w-5 h-5 text-red-700 cursor-pointer"/>
            </div>
        </div>
};
