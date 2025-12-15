import { nunito, RubikFont } from "@/fonts/font";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaleScope",
  description: "Integrative project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="abyss" lang="es">
      <body className={`${nunito.className}`} >{children}</body>
    </html>
  );
}
