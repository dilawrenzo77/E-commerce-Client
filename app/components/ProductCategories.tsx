"use client"
import { categories } from "../../libs/mock-data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function ProductCategories() {
    const searchParams  = useSearchParams();
    const selectedCategory = searchParams.get("category");
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        // If "all" is selected, remove the parameter instead of setting it to "all"
        if (value === "all" || value === null) {
            params.delete("category");
        } else {
            params.set("category", value);
        }
        router.push(`${pathname}?${params.toString()}`, {scroll: false})
    }

    // console.log(selectedCategory);
    return <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-2 mb-4 p-2 text-sm bg-black">
        {categories.map(category => (
            <div key={category.name} className={`flex items-center justify-center gap-2 px-2 py-2 cursor-pointer 
                ${category.slug === selectedCategory ? "bg-white " : "text-white"}`
            } onClick={() => handleChange(category.slug)}>
                {category.icon}
                <p >{category.name}</p>
            </div>
        ))}
    </div>
};
