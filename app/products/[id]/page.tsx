import ProductInteraction from "@/app/components/ProductInteraction";
import { ProductType } from "../../../types/product";
// import { useSearchParams } from "next/navigation"; 
import Image from "next/image";
import { notFound } from "next/navigation";


// const product: ProductType = 
//     {
//         id: 1,
//         name: "Octo Pullover",
//         shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reiciendis!",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet corporis voluptatem assumenda quaerat illum.",
//         price: 39.9,
//         sizes: ["s", "m", "l", "xl", "xxl"],
//         colors: ["black", "gray", "amber"],
//         images: {
//             black: "/products/prod1.png",
//             gray: "/products/prod2.png",
//             amber: "/products/prod3.png"
//         },
//         categorySlug: "test",
//         createdAt: new Date(),
//         updatedAt: new Date()
//     }

// const fetchData = async (id:string) => {
//     const  res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/products/${id}`);
//     const data:ProductType = await res.json()
//     return data
// }

const fetchData = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/products/${id}`);
        
        if (!res.ok) {
            console.error(`API returned ${res.status}: ${res.statusText}`);
            return null;
        }
        
        const response = await res.json();
        // console.log("Fetched product data:", JSON.stringify(response, null, 2));
        
        // Extract the actual product from the response structure
        const productData = response.data || response;
        
        return productData as ProductType;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export default async function page({params,searchParams}: 
    {params: Promise<{id:string}>; 
        searchParams: Promise<{color:string; size:string}>
    }) {

    const { id } = await params;
    const singleProduct = await fetchData(id);
    if (!singleProduct) {
        notFound();
    }


    const {size,color} = await searchParams;
    const selectedSize = size || (singleProduct.sizes?.[0] || "");
    const selectedColor = color || (singleProduct.colors?.[0] || "");
    
    
    return <div className="flex flex-col gap-4 md:flex-row md:gap-12 my-8">
        {/* Image */}
        <div className="w-full md:w-5/12 relative aspect-3/3">
            <Image src={(singleProduct.images as Record<string, string>)[selectedColor] || ""} fill alt={singleProduct.name} className="object-contain rounded-md"/>
        </div>
        {/* Details */}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start gap-5">
            <h1 className="text-2xl font-medium">{singleProduct.name}</h1>
            <p className="text-sm tex-gray-300">{singleProduct.description}</p>
            <h2 className="text-2xl font-medium">&#8358;{singleProduct.price.toFixed(2)}</h2>

            {/* CardInterations */}
            <ProductInteraction 
                product={singleProduct} 
                selectedSize={selectedSize} 
                selectedColor={selectedColor}
            />

            {/* CARD INFO */}
            <div className="flex items-center gap-4 mt-8">
                <Image src="/payments/mastercard-svgrepo-com (1).svg" width={50} height={25} alt="Icon 1" className="object-cover" />
                <Image src="/payments/visa-svgrepo-com.svg" alt="Icon 2" width={50} height={25} className="object-cover" />
                <Image src="/payments/stripe-svgrepo-com.svg" alt="Icon 3" width={50} height={25} className="object-cover" />
            </div>
            <p className="text-xs text-gray-400 text-center md:text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quasi, ex quis dolore ipsam maiores omnis tempora ut quo voluptates necessitatibus praesentium eius? Consequatur a rerum quas similique amet ipsa.</p>
        </div>
    </div>
};
