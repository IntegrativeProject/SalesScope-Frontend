"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside className={`${className}`}>
      <div className="h-20 flex items-center justify-center  border-gray-200">
        <h2 className="text-xl font-semibold">Logo</h2>
      </div>

      <nav className="flex-1 p-6 space-y-2">
        <Link
          href="/"
          className={`block px-4 py-2 rounded-lg text-md font-medium ${
            pathname === "/" ? "bg-[#4880FF] text-white" : "hover:bg-gray-100"
          }`}
        >
          Dashboard
        </Link>

        <Link
          href="/registersale"
          className={`block px-4 py-2 rounded-lg text-md font-medium ${
            pathname === "/registersale"
              ? "bg-[#4880FF] text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Register sale
        </Link>

        <Link
          href="/products"
          className={`block px-4 py-2 rounded-lg text-md font-medium ${
            pathname === "/products"
              ? "bg-[#4880FF] text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Products
        </Link>

        <Link
          href="/analysisandpredictions"
          className={`block px-4 py-2 rounded-lg text-md font-medium ${
            pathname === "/analysisandpredictions"
              ? "bg-[#4880FF] text-white"
              : "hover:bg-gray-100 "
          }`}
        >
          Analysis and Predictions
        </Link>
      </nav>
    </aside>
  );
}
