import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Frame from "@/components/frame";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", style: ["normal","italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
      <header>
        <Frame />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}