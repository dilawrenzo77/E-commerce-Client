import { ReactNode } from "react";
// import type { Product , Category } from "@repo/product-db";


export interface Product{
    id: number
    name:  string 
    shortDescription: string
    description: string
    price: number
    sizes: string[]
    colors: string[]
    images: object
    createdAt: Date
    updatedAt: Date
    categorySlug: string 
};

export interface CategoryTable {
    id: Number
    name: String 
    slug:  String 
    products: Object[]
}


export interface Category {
    name: string,
    icon: ReactNode,
    slug: string
} ;

export interface Steps {
    id: number,
    title: string,
    icon: ReactNode
}

export type ProductType =  Product;

export type ProductsType =  ProductType[];


export interface PaystackProduct {
    name: string
    description: string
    price: number
    currency: string
}

export type CategoryType =  CategoryTable;

