export default function Footer() {
    return (
        <div className="border-t flex flex-col justify-center mt-40 mb-40 mr-6 ml-6">
            <div>
            <h1 className="font-serif tracking-[0.2em] uppercase text-[40px] text-extrabold text-center mt-20"><b>ZSTELLAR</b></h1>
            </div>
            <div className="flex flex-row justify-center gap-10 mt-10">
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Instagram</p>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Stockists</p>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Terms</p>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase">Contact</p>
            </div>
            <div>
                <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-muted mt-10 text-center">© 2026 ZSTELLAR STUDIOS. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
}