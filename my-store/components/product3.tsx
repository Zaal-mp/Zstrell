import Image from "next/image";

export default function Product3() {
    return (
        <div className="w-90 flex flex-col gap-1">
            <div className=" flex flex-row justify-between">
                <p className="font-inter text-[11px] tracking-[0.25em] uppercase">MODEL // 03</p>
                <p className="font-inter text-[11px] tracking-[0.25em] uppercase">ARCHIVE SERIES</p>
            </div>
            <div className="relative w-90 aspect-square overflow-hidden mt-2 bg-neutral-100">
                <Image 
                src="/model 3.avif"
                alt="Running shoe on display"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
                />
            </div>
            <div className="w-90 border-t mt-4">
                <h1 className="font-serif tracking-[0.2em] uppercase text-xl text-extrabold">Horizon</h1>
                <p className="font-inter text-[12px] text-muted">A wider perspective. Titanium chassis with polarized charcoal lenses.</p>
            </div>
            <div className="flex flex-row justify-between">
                <h1 className="font-serif text-l text-extrabold">$510</h1>
                <h1 className="font-serif text-m ">ACQUIRE</h1>
            </div>
        </div>
    );
}