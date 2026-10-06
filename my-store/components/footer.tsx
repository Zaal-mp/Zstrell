export default function Footer() {
    return (
        <div className="border-t flex flex-col justify-center mt-20 mb-20 md:mt-40 md:mb-40 md:ml-6 md:mr-6 ml-5 mr-5 px-6">
            <div>
            <h1 className="font-serif tracking-[0.2em] uppercase text-[32px] md:text-[40px] text-extrabold text-center mt-10 md:mt-20"><b>ZSTRELL</b></h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-6 md:mt-10">
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Instagram</p>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Stockists</p>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Terms</p>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Contact</p>
            </div>
            <div>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-muted mt-6 md:mt-10 text-center">© 2026 ZSTRELL STUDIOS. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
}