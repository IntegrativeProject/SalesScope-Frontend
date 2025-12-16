"use client"

import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};
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
    <div className="flex justify-center p-10  ">
      <div className="grid grid-cols-2 w-280 rounded-xl bg-base-200 space-x-2">
        <div className="flex items-center justify-center  ">
           <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-md mx-auto p-2 flex justify-center flex-col"
            onSubmit={handleSubmit}
          >
            <Image
              src="/img/Logo.png"
              alt="Logo"
              width={300}
              height={200}
              className=" flex items-center mx-auto"
            />
             <motion.p variants={item} className="font-semibold p-4 mb-8">
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
              <Button className=" w-full p-3 rounded-xl cursor-pointer   font-bold mt-4 ">
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
