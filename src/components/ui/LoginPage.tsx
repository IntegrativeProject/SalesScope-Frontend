import React from "react";

export default function LoginPage() {
  return (
    <div className="h-screen">
    <form className="max-w-md mx-auto mt-20 p-9 border border-gray-300 rounded-lg shadow-md bg-red-500">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <div className="mb-4 space-y-5">
        <label id="email"> Email</label>
        <input type="text"
              placeholder="Full name"
              className="w-full p-3 border rounded-lg bg-white "/>
              <label id="password">Password</label>
              <input type="password"
              placeholder="********"
              className="w-full p-3 border rounded-lg bg-white "/>
              <button className="bg-[#4880FF] w-full border p-3 rounded-xl flex items-center justify-center cursor-pointer">Sign-in</button>
      </div>
    </form>
    </div>
  );
}
