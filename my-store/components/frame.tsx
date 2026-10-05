import Navbar from "@/components/navbar";

export default function Frame() {
    return (
    <div className="pointer-events-none fixed inset-4 md:inset-6 z-50 border border-ink bg-transparent">
        <Navbar />
    </div>
    );
  }