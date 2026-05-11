"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
    const searchParams  = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (value: string ) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return <div className="flex items-center justify-end text-sm text-gray-500 gap-2 my-6">
        <span>sort by:</span>
        <select 
        name="sort" 
        id="sort" 
        className="shadow-md ring-1 ring-gray-200 p-1 rounded-sm"
        onChange={(e) => handleChange(e.target.value)}
        >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
        </select>
    </div>
};
