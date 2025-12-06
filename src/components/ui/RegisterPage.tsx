import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 p-1 w-300 h-auto">
        <div className="bg-[#4880FF] flex items-center justify-center rounded-lg"></div>
        <div className="bg-white flex items-center justify-center rounded-md ">
          <form className="max-w-md mx-auto mt-15 p-2 flex justify-center flex-col ">
            <Image
                src="/img/logofinal.png"
                width={200}
                height={200}
                alt="SaleScope Logo"
                className="mb-3 flex items-center mx-auto"
                />
            <h2 className="text-2xl font-bold mb-4 text-center ">
              Register in SalesScope
            </h2>

            <div className="mb-4 space-y-5">
              <label id="name"> Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4880FF]"
              />
              <label id="email"> Email</label>
              <input
                type="text"
                placeholder="example@example.com"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4880FF]"
              />

              <label id="password">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4880FF]"
              />
              <label id="confirm-password">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4880FF]"
              />

              <button className="bg-blue-600 w-full border p-3 rounded-xl text-white font-bold mt-8 cursor-pointer hover:bg-[#4880FF] transform-border hover:scale-95 transition duration-300">
                Register
              </button>

              <p className="text-center mt-5">
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
