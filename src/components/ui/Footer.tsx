"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className=".bg-gradient-to-r from-[#020617] to-[#020617] text-base-content"
    >
      <div className=".max-w-screen-xl mx-auto px-8 py-12 grid gap-8 md:grid-cols-3">

        <div className="space-y-4">
          <Image
            src="/img/Logo.png"
            alt="SaleScope Logo"
            width={180}
            height={60}
          />

          <p className="text-sm opacity-80">
            <span className="font-bold">SaleScope</span> helps businesses
            manage sales, analyze performance, and gain actionable insights
            to make smarter decisions.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h3 className="font-bold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm opacity-90 text-center">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/registersale" className="hover:text-primary transition-colors">
                Register Sale
              </Link>
            </li>
            <li>
              <Link
                href="/analysisandpredictions"
                className="hover:text-primary transition-colors"
              >
                Analysis & Predictions
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm opacity-75 mt-10">
          <h3 className="font-bold mb-4">Legal Information</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base-300 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} SaleScope. All rights reserved.
      </div>
    </motion.footer>
  );
}
