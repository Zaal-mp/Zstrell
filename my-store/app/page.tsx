import Product1 from "@/components/product1";
import Product2 from "@/components/product2";
import Product3 from "@/components/product3";
import Spec from "@/components/spec";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <div>
    <div className="h-screen md:p-20 text-center flex flex-col justify-center">
      <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-muted">COLLECTION N° 04</p>
      <h1 className="font-serif text-[clamp(2rem,8vw,6rem)] leading-tight">SHADE <em>defines</em> THE
      SILHOUETTE</h1>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 md:gap-20 lg:gap-40 px-6">
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