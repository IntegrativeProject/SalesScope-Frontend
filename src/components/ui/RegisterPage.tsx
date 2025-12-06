import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 p-2 w-300 h-auto">
        <div className="bg-[#4880FF] flex items-center justify-center rounded-lg"></div>
        <div className="bg-white flex items-center justify-center border border-gray-200 rounded-md ">
          <form className="max-w-md mx-auto mt-20 p-10 shadow-md flex justify-center flex-col ">
            <Image
                src="/logofinal.png"
                width={60}
                height={60}
                alt="SaleScope Logo"
                className="mb-3 flex items-center mx-auto"
                />
            <h2 className="text-2xl font-bold mb-3 text-center">
              Register in SaleScope
            </h2>

            <div className="mb-4 space-y-5">
              <label id="name"> Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 border rounded-lg bg-white "
              />
              <label id="email"> Email</label>
              <input
                type="text"
                placeholder="example@example.com"
                className="w-full p-3 border rounded-lg bg-white "
              />

              <label id="password">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-white "
              />
              <label id="confirm-password">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-white "
              />

              <button className="bg-[#4880FF] w-full border p-3 rounded-xl">
                Register
              </button>

              <p className="text-center text-xs mt-5">
                Do you already have an account?{" "}
                <Link href="/login" className="text-blue-500 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
