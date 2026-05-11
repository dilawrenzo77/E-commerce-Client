import { Category, Steps } from "@/types/product";
import { ShoppingBasket, Shirt, Boxes, Venus, Handbag, NotepadText, Truck, Diamond } from "lucide-react";
import type { ProductType } from "../types/product";

export const products: ProductType[] = [
    {
        id: 1,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        id: 3,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 4,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 5,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 6,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 7,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 8,
        name: "Octo Pullover",
        shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "gray", "amber"],
        images: {
            black: "/products/prod1.png",
            gray: "/products/prod2.png",
            amber: "/products/prod3.png"
        },
        categorySlug: "test",
        createdAt: new Date(),
        updatedAt: new Date()
    },
]

export const categories: Category[] = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all",
    },
    {
        name: "Shirts",
        icon: <Shirt className="w-4 h-4"/>,
        slug: "shirt",
    },
    {
        name: "Skirts",
        icon: <Venus className="w-4 h-4"/>,
        slug: "skirt",
    },
    {
        name: "Tailored-vest",
        icon: <Diamond className="w-4 h-4"/>,
        slug: "vest",
    },
    {
        name: "Outervest",
        icon: <Boxes className="w-4 h-4"/>,
        slug: "outwear",
    },
    {
        name: "Bodysuits",
        icon: <Handbag className="w-4 h-4"/>,
        slug: "bodysuit",
    }
]

export const steps: Steps[] = [
    {
        id: 1,
        title: "Shopping Cart",
        icon: <Handbag className="w-6 h-6 text-gray-600" />
    },
    {
        id: 2,
        title: "Shipping Address",
        icon: <NotepadText className="w-6 h-6 text-gray-600" />
    },
    {
        id: 3,
        title: "Payment Method",
        icon: <Truck className="w-6 h-6 text-gray-600" />
    },
]