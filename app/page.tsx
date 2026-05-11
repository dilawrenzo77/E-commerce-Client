import Image from "next/image";
import Stock1 from "../public/stock/stock1.jpg";
import Stock2 from "../public/stock/stock2.jpg";
import Stock3 from "../public/stock/stock3.jpg";
import fash1 from "../public/fashion/fash1.jpg";
import fash2 from "../public/fashion/fash4.jpg";
import fash3 from "../public/fashion/fash2.jpg";
import fash4 from "../public/fashion/fash3.jpg";
import fash5 from "../public/fashion/fash5.jpg";
import fash6 from "../public/fashion/fash7.jpg";
import ProductSection from "./components/ProductSection";

export default async function Home({searchParams}: {searchParams: Promise<{category:string}>}) {
  const category = (await searchParams).category;


  return (
    <main className="space-y-30">
      <section className="w-full h-screen flex flex-col items-center sm:flex-row sm:items-stretch justify-center gap-0.5">
        <div className="relative h-full w-full sm:w-1/2">
          <Image 
            src={Stock1} 
            alt="stock1" 
            fill 
            className="object-cover"
            sizes="50vw"
          /> 
          <div className="absolute z-20 bottom-0 sm:top-1/3 sm:right-0 flex flex-col items-end">
            <p className="text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[15rem] font-orbitron text-white tracking-widest">OC</p>
            <p className="invisible sm:visible text-2xl text-gray-600 tracking-widest pr-5">Soft Power</p>
          </div>
        </div>
        <div className="relative h-full w-full sm:w-1/2">
          <Image 
            src={Stock2} 
            alt="stock2" 
            fill 
            className="object-cover"
            sizes="50vw"
          /> 
          <div className="absolute z-20 top-0 sm:top-1/3 left-0 flex flex-col items-start">
            <p className="text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[15rem] font-orbitron text-white tracking-widest pl-4 ">TO</p>
            <p className="invisible sm:visible text-2xl text-gray-600 tracking-widest pl-5">Sharp Style</p>
          </div>
        </div>
      </section>

      <section className="min-h-screen space-y-15">
        <div className="space-y-5">
          <p className="font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest font-orbitron">THE SCIENCE <br/>OF EXCEPTIONAL <br/>STYLE</p>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur repellat. suscipit dicta minima incidunt<br/>Amet numquam quod hic nobis delectus ullam blanditiis itaque, suscipit dicta minima incidunt<br/>suscipit dicta minima incidunt.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full h-screen ">
          <div className="w-full md:w-8/12 h-full">
            <Image src={fash1} alt="fash1" className="object-cover border-4 border-black" width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}/>
          </div>
          <div className="flex flex-row sm:flex-col  items-start justify-center gap-1  h-full w-full sm:w-4/12">
            <div className=" w-full h-1/2 ">
              <Image src={fash3} alt="fash1" className="object-cover border-4 border-black" width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}/>
            </div>
            <div className=" w-full h-1/2">
              <Image src={fash5} alt="fash1" className="object-cover border-4 border-black" width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:justify-center sm:flex-row items-center gap-2 w-full sm:h-screen -mt-35 sm:mt-0">
          <div className="flex flex-row sm:flex-col items-start justify-center gap-1  h-full w-full sm:w-4/12">
            <div className=" w-full h-1/2">
              <Image src={fash4} alt="fash1" className="object-cover border-4 border-black" width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}/>
            </div>
            <div className=" w-full h-1/2 ">
              <Image src={fash6} alt="fash1" className="object-cover border-4 border-black" width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}/>
            </div>
          </div>
          <div className="w-full md:w-8/12 h-full">
            <Image src={fash2} alt="fash2" className="object-cover border-4 border-black" width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}/>
          </div>
        </div>
      </section>

      {/* Product LIst  */}
      <section className="space-y-10">
        <div className="space-y-4">
          <p className="font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest font-orbitron">OUR <br/> TIMELESS COLLECTION</p>
          <p className="text-sm tracking-widest">Quiet luxury. Unwavering silhouette. Wool from highlands, linen from slow harvests. No haste. Just the weight of a well-made hem, the precision of a hidden stitch, the lasting architecture of garments worn with purpose. This collection exists beyond the calendar — for those who dress in decades, not days</p>
        </div>
        <ProductSection category={category} params="homepage"/>
      </section>

      <section className="space-y-5 mb-30">
        <div className="flex flex-col items-center sm:items-start gap-4">
            <p className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-orbitron text-black">Designed with intent</p>
            <p className="text-sm tracking-widest">A different kind of Predator</p>
        </div>
        <div className="relative h-100 w-full aspect-3/1">
          <Image 
            src={Stock3} 
            alt="stock2" 
            className="object-cover h-full"
          /> 
        </div>
      </section>
    </main>
  );
}
