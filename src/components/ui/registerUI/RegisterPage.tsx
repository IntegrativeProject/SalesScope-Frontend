"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
   const router = useRouter();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name,
          email: form.email,
          password: form.password,
          role_name: "customer",
        }),
      }
    );

    const data = await res.json();
    console.log("REGISTER RESPONSE:", data);

    if (!res.ok) {
      alert(data.message || "Error registering user");
      return;
    }

    alert("User registered successfully");
    router.push("/login");
  } catch (error) {
    console.error(error);
    alert("Backend connection error");
  }
};

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
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 p-2 flex justify-center flex-col ">
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
              <label id="name">Full Name</label>
              <input
                 onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                type="text"
                placeholder="Full name"
                className="w-full p-3 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#4880FF]"
              />
              <label id="email"> Email</label>
              <input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="text"
                placeholder="example@example.com"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary"
              />

              <label id="password">Password</label>
              <input
               onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary"
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
