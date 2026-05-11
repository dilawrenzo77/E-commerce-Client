"use client"
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import ProfileButton from "./ProfileButton";


export default function Navbar() {
    return <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4 px-2">
        {/* LEFT  */}
        <div>
            <Link href="/">
                <p className="text-lg text-black/80 font-orbitron">OCTO</p>
            </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-7">
            <SearchBar />
            <Link href="/">
                <Home className="text-gray-600 w-5 h-5"/>
            </Link>
            <ShoppingCartIcon />
            <Bell className="text-gray-600 w-5 h-5"/>
           <Show when="signed-out">
                <SignInButton />
            </Show>
            <Show when="signed-in">
                <ProfileButton />
            </Show>
        </div>
    </nav>
};
