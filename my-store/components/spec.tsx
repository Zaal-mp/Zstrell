import Image from "next/image";

export default function Spec() {
    return (
        <div className="flex flex-col lg:flex-row justify-center mt-40 gap:20 lg:gap-40">
            <div className="relative w-75 md:w-100 lg:w-160 aspect-[3/2] overflow-hidden mt-2 bg-gray ml-11 lg:ml-15 ">
                <Image 
                src="/spec.avif"
                alt="Running shoe on display"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 360px"
                />
            </div>
            <div className="flex flex-col ml-11 mr-7 lg:mr-20 mt-5 lg:mt-2">
                <p className="font-inter text-[11px] uppercase text-muted">SPECIFICATION // OB-04.2</p>
                <h1 className="font-serif text-[clamp(2.5rem,5vw,3rem)] text-extrabold"><b>Obsessively <em>crafted</em> for the
                discerning eye.</b></h1>
                <p className="text-6px lg:text-[15px] mt-5"><span>Every curve is calculated. Every hinge is tested for 10,000 cycles. </span>
                <br></br>
                <span>We don't build eyewear; we curate how you perceive </span>
                <br></br>
                <span>the world. Silent luxury is not an aesthetic, it's a discipline.</span></p>
                <div className="border-t flex flex-row mt-5 lg:gap-50 gap-20"> 
                <div>
                    <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-muted mt-5">Material</p>
                    <p className="font-inter text-[13px]">Beta-Titanium / Acetate</p>
                    <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-muted mt-5">Origin</p>
                    <p className="font-inter text-[13px]">Sabae, Japan</p>
                </div>
                <div>
                    <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-muted mt-5">Lens</p>
                    <p className="font-inter text-[13px]">CR-39 UV400</p>
                    <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-muted mt-5">Weight</p>
                    <p className="font-inter text-[13px]">18.4 grams</p>
                </div>
            </div>
            </div>
        </div>
    );
}