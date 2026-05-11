"use client"
import { UserButton } from "@clerk/nextjs";
import { ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileButton() { 
    const router = useRouter()

    return (
        <UserButton>
            <UserButton.MenuItems>
                <UserButton.Action label="See Orders" labelIcon={<ShoppingCartIcon className="h-4 w-4" />} onClick={()=> router.push("/orders")}/>
            </UserButton.MenuItems>
        </UserButton>
    )
};
