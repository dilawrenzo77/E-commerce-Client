import ProductSection from "../components/ProductSection"

export default async function page({searchParams}: {searchParams: Promise<{category:string; search:string; sort:string;}>}) {
  const category = (await searchParams).category
  const search = (await searchParams).search
  const sort = (await searchParams).sort
    return <div className="">
        <ProductSection category={category} search={search} sort={sort} params="products"/>
    </div>
};
