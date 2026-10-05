import Product1 from "@/components/product1";
import Product2 from "@/components/product2";
import Product3 from "@/components/product3";
import Spec from "@/components/spec";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <div>
    <div className="p-10 md:p-20 text-center flex flex-col items-center">
      <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-muted">COLLECTION N° 04</p>
      <h1 className="font-serif text-[clamp(2rem,8vw,6rem)] leading-tight">SHADE <em>defines</em> THE
      SILHOUETTE</h1>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-6">
      <Product1 />
      <Product2 />
      <Product3 />
    </div>
    <div>
      <Spec />
    </div>
    <div>
      <Footer />
    </div>
   </div>
  );
}