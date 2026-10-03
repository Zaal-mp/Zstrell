import { Playfair_Display, Inter } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", style: ["normal","italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container-custom">{children}</main>
      </body>
    </html>
  )
}