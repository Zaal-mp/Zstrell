import Product1 from "@/components/product1";
import Product2 from "@/components/product2";
import Product3 from "@/components/product3";

export default function Home() {
  return (
   <div>
    <div className="p-50 text-center flex-col">
      <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-muted">COLLECTION N° 04</p>
      <h1 className="font-serif text-[clamp(1.5rem,7vw,6rem)]">SHADE <em>defines</em> THE
      SILHOUETTE</h1>
    </div>
    <div className="flex flex-row justify-center gap-10 ">
      <Product1 />
      <Product2 />
      <Product3 />
    </div>
   </div>
  );
}