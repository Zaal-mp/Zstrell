import Image from "next/image";

export default function Product1() {
    return (
        <div className="w-full max-w-[360px] flex flex-col gap-1">
            <div className=" flex flex-row justify-between">
                <p className="font-inter text-[11px] tracking-[0.25em] uppercase">MODEL // 01</p>
                <p className="font-inter text-[11px] tracking-[0.25em] uppercase">NOIR SERIES</p>
            </div>
            <div className="relative w-full aspect-square overflow-hidden mt-2 bg-neutral-100">
                <Image
                src="/model 1.avif"
                alt="Running shoe on display"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
                />
            </div>
            <div className="w-full border-t mt-4">
                <h1 className="font-serif tracking-[0.2em] uppercase text-lg md:text-xl text-extrabold">The Monolith</h1>
                <p className="font-inter text-[12px] text-muted">Sculpted from a single block of Italian acetate. Total light occlusion.</p>
            </div>
            <div className=" flex flex-row justify-between">
                <h1 className="font-serif text-l text-extrabold">$420</h1>
                <h1 className="font-serif text-m ">ACQUIRE</h1>
            </div>
        </div>
    );
}