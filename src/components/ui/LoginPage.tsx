import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 p-20 w-300 h-auto">
        <div className="bg-white flex items-center justify-center border border-gray-300 rounded-lg ">
          <form className="max-w-md mx-auto mt-20 p-10 shadow-md flex justify-center flex-col ">
            <h2 className="text-2xl font-bold mb-3 text-center">Login</h2>
            <p className="text-gray-600 font-semibold p-4 mb-6">
              Today is a new day. Its your day. You shape it. Sign in to start
              managing your sales.
            </p>

            <div className="mb-4 space-y-5">
              <label id="email"> Email</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 border rounded-lg bg-white "
              />

              <label id="password">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg bg-white "
              />

              <button className="bg-[#4880FF] w-full border p-3 rounded-xl">
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

        <div className="bg-blue-500 flex items-center justify-center rounded-lg"></div>
      </div>
    </div>
  );
}
