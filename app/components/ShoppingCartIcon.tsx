"use client"
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import useCartStore from "../store/cartStore";

export default function ShoppingCartIcon() {
    const {cart, hasHydrated} = useCartStore();

    if (!hasHydrated) return null;
    return <div className="relative">
        <Link href="/cart" className="cursor-pointer">
            <ShoppingBag className="text-gray-600 w-5 h-5"/>
            <span className="absolute top-[-9] right-[-9] text-sm font-bold text-black">{cart.length}</span>
        </Link>
    </div>
};
