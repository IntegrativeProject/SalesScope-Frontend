import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-screen mx-auto grid md:grid-cols-3 gap-6 border-t ">
        <div className="flex items-end">
          <Image
            src="/img/logo.png"
            alt="SaleScope Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        <div>
          <h3 className="text-base font-bold flex justify-center">
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
          <h3 className="text-base font-semibold">Legal Information</h3>
          <ul className="space-y-2 text-sm opacity-90 mt-2">
            <li>
              <Link href="" className="hover:underline">
                Terms and Conditions(example)
              </Link>
            </li>
            <li>
              <Link href="" className="hover:underline">
                Privacy Policy(example)
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5  flex justify-center text-xs">
        <p>
          &copy; {new Date().getFullYear()} SalesScope. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
