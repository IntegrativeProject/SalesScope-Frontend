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
        <div className="flex h-screen w-screen overflow-hidden">

          {/* Sidebar fijo */}
          <Sidebar className="w-60 bg-white border-r shadow-sm" />

          {/* Contenedor principal */}
          <div className="flex flex-col flex-1 overflow-hidden">

            {/* Navbar fijo */}
            <Navbar />

            {/* Contenido */}
            <main className="flex-1 overflow-y-auto bg-[#F5F6FA] p-6">
              {children}
            </main>

          </div>

        </div>
      </body>
    </html>
  );
}
