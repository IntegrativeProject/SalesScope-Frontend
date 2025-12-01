"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClockIcon, AcademicCapIcon } from "@heroicons/react/24/outline"; // Si usas heroicons, o usa cualquier icono SVG
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Dashboard", Icon: ClockIcon },
    { href: "/registersale", label: "Register sale", Icon: AcademicCapIcon },
    { href: "/products", label: "Products", Icon: AcademicCapIcon },
    {
      href: "/analysisandpredictions",
      label: "Analysis and Predictions",
      Icon: AcademicCapIcon,
    },
  ];

  return (
    <aside className={`${className}`}>
      <div className="h-20 flex items-center justify-center ">
        <img src="/img/logofinal.png" alt="logo" className="w-75" />
      </div>

      <nav className="flex-1 p-6 space-y-2">
        {links.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg text-md font-semibold ${
                isActive
                  ? "bg-[#4880FF] text-white"
                  : "hover:bg-gray-100 text-black "
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : ""
                }  aria-hidden="true`}
              />

              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
