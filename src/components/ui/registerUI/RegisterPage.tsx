import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 p-1 w-300 h-screen">
        <div className=" flex items-center justify-center">
          <Image
            src="/img/register.png"
            alt="Login illustration"
            width={500}
            height={700}
            className="object-cover rounded-lg "
          />
        </div>

        <div className=" flex items-center justify-center rounded-md ">
          <form className="max-w-md mx-auto mt-5 p-2 flex justify-center flex-col ">
            <Image
              src="/img/Logo.png"
              width={300}
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
                className="w-full p-3 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#4880FF]"
              />
              <label id="email"> Email</label>
              <input
                type="text"
                placeholder="example@example.com"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary"
              />

              <label id="password">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary"
              />
              <label id="confirm-password">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-secundary"
              />

              <button className="bg-base-100 w-full border p-3 rounded-xl cursor-pointer hover:bg-base-200  font-bold mt-4 transform-border hover:scale-95">
                Register
              </button>

              <p className="text-center mt-5">
                Do you already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
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
