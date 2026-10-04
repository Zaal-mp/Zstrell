import Product1 from "@/components/product1";

export default function Home() {
  return (
   <div>
    <div className="p-50 border text-center flex-col">
      <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-muted">COLLECTION N° 04</p>
      <h1 className="font-serif text-[clamp(1.5rem,7vw,6rem)]">SHADE <em>defines</em> THE
      SILHOUETTE</h1>
    </div>
    <div className="p-100 border flex flex-row justify-center gap-10">
      <Product1 />
    </div>
   </div>
  );
}