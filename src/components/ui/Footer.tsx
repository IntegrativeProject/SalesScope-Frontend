import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-base-200 ">
      <div className="max-w-screen mx-auto grid md:grid-cols-3 gap-6 mt-4 ">
        <div className="flex items-end">
          <Image
            src="/img/Logo.png"
            alt="SaleScope Logo"
            width={300}
            height={100}
            className="mx-auto"
          />
       
          
        </div>

        <div>
          <h3 className="font-bold flex justify-center ">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm opacity-90 mt-2 flex items-center flex-col">
            <li>
              <Link href="/" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/registersale" className="hover:underline">
                Register Sale
              </Link>
            </li>

            <li>
              <Link href="/analysisandpredictions" className="hover:underline">
                Analysis & Predictions
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-semibold">Legal Information</h3>
          <ul className="space-y-2 text-sm opacity-90 mt-2">
            <li>
              <Link href="" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5 flex justify-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} SalesScope. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
