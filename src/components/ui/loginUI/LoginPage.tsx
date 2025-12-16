"use client"

import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-2 w-300 h-screen ">
        <div className="flex items-center justify-center  ">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto p-2  flex justify-center flex-col">
            <Image
              src="/img/Logo.png"
              alt="Logo"
              width={350}
              height={250}
              className=" flex items-center mx-auto"
            />
            <p className="font-semibold p-4 mb-8">
              Its your day. You shape it. Sign in to start managing your sales.
            </motion.p>

            <div className="mb-4 space-y-6">
              <label id="email">Email</label>
              <input
               onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="example@example.com"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secundary "
              />

              <label id="password">Password</label>
              <input
               onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary "
              />
                 {error && <p className="text-error">{error}</p>}
              <Button className="bg-base-100 w-full border p-3 rounded-xl cursor-pointer hover:bg-base-200  font-bold mt-4 transform-border hover:scale-95">
                Sign-in
              </Button>

              <motion.p variants={item} className="text-center text-sm mt-5">
                Don’t you have an account?{" "}
                <Link href="/register" className="hover:underline text-primary">
                  Sign up
                </Link>
              </motion.p>
            </div>
          </motion.form>
        </div>

        <div className="flex items-center justify-center rounded-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <Image
              src="/img/login.png"
              alt="Login illustration"
              width={500}
              height={700}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
