import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex justify-center  ">
      <div className="grid grid-cols-2 w-300 h-screen ">
        <div className="flex items-center justify-center ">
          <form className="max-w-md mx-auto p-2  flex justify-center flex-col ">
            <Image
              src="/img/logofinal.png"
              alt="Logo"
              width={250}
              height={250}
              className=" flex items-center mx-auto"
            />
            <p className="text-gray-600 font-semibold p-4 mb-8">
              Today is a new day. Its your day. You shape it. Sign in to start
              managing your sales.
            </p>

            <div className="mb-4 space-y-5">
              <label id="email">Email</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4880FF] "
              />

              <label id="password">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4880FF] "
              />

              <button className="bg-blue-500 w-full border p-3 rounded-xl cursor-pointer hover:bg-[#4880FF] text-white font-bold mt-4">
                Sign-in
              </button>

              <div className="text-right mb-4">
                <Link
                  href="/register"
                  className="text-blue-500 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <p className="text-center text-sm mt-5">
                Don’t you have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-500 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className=" flex items-center justify-center rounded-lg ">
          <Image
            src="/img/login-image2.png"
            alt="Login illustration"
            width={500}
            height={700}
            className="object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
