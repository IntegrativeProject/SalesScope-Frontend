import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaleScope",
  description: "Integrative project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <div className="flex h-screen w-screen">
          
          {/* Sidebar */}
          <Sidebar className="w-64 bg-white " />

          {/* Área principal */}
          <div className="flex flex-col flex-1">
            
            {/* Navbar */}
            <Navbar/>

            {/* Contenido de la página */}
            <main className=" h-screen bg-[#F5F6FA]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
