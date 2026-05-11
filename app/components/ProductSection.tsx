import Link from "next/link";
import ProductCard from "./ProductCard";
import ProductCategories from "./ProductCategories";
// import { products } from "../../libs/mock-data";
import Filter from "./Filter";
import type { ProductType } from "@/types/product";


// const fetchData = async ({category,search,sort,params}: {category?:string, search?:string, sort?:string,params:"homepage" | "products"}) => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/products
//         ?${category ? `category=${category}` : " " }
//         ?${search ? `&search=${search}` : " " }
//         &sort=${sort || "newest"}
//         ${params === "homepage" ? "&limit=8" : ""}
//         `);
//     const data:ProductType[] = await res.json();
//     return data
// }
const fetchData = async ({category, search, sort, params}: {category?:string, search?:string, sort?:string, params:"homepage" | "products"}) => {
    // Build query parameters properly
    const queryParams = new URLSearchParams();
    
    if (category) queryParams.append("category", category);
    if (search) queryParams.append("search", search);
    if (sort) queryParams.append("sort", sort);
    if (!sort) queryParams.append("sort", "newest");
    if (params === "homepage") queryParams.append("limit", "8");
    
    const url = `${process.env.NEXT_PUBLIC_PRODUCT_URL}/products?${queryParams.toString()}`;
    
    const res = await fetch(url);
    
    // Add error handling
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data: ProductType[] = await res.json();
    return data;
}



export default async function ProductSection({category,search,sort,params}: {category:string,search?:string, sort?:string, params: "homepage" | "products"}) {
    const products =  await fetchData({category, search, sort, params})
    
    return <main className="w-full">
        <ProductCategories />
        {params === "products" && <Filter />}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        <Link href={category ? `/products/?category=${category}` : "/products"} className="flex justify-end mt-4 underline text-sm text-black hover:scale-101 transition-all duration-300">All products</Link>
    </main>
};
