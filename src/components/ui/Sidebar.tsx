"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-20 flex items-center justify-center border-b border-gray-200">
          <h2 className="text-xl font-semibold">Logo</h2>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <Link
            href="/"
            className={`block px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === "/"
                ? "bg-[#4880FF] text-white"
                : "hover:bg-[#4880FF]"
            }`}
          >
            Dashboard
          </Link>

          <Link
            href="/registersale"
            className={`block px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === "/registersale"
                ? "bg-[#4880FF] text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Register sale
          </Link>
          <Link
            href="/products"
            className={`block px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === "/products"
                ? "bg-[#4880FF] text-gray-900"
                : "hover:bg-gray-100"
            }`}
          >
            Products
          </Link>
          <Link
            href="/analysisandpredictions"
            className={`block px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === "/analysisandpredictions"
                ? "bg-[#4880FF] text-gray-900"
                : "hover:bg-gray-100"
            }`}
          >
            Analysis and Predictions
          </Link>
        </nav>
      </aside>
  );
}
