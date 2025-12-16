"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 p-1 w-300 h-screen">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/img/register.png"
              alt="Login illustration"
              width={500}
              height={700}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="flex items-center justify-center rounded-md">
          <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-md mx-auto mt-5 p-2 flex justify-center flex-col"
          >
            <motion.div variants={item}>
              <Image
                src="/img/Logo.png"
                width={300}
                height={200}
                alt="SaleScope Logo"
                className="mb-3 flex items-center mx-auto"
              />
            </motion.div>

            <motion.h2
              variants={item}
              className="text-2xl font-bold mb-4 text-center"
            >
              Register in SalesScope
            </motion.h2>

            <div className="mb-4 space-y-5">
              <motion.div variants={item}>
                <label id="name"> Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4880FF]"
                />
              </motion.div>

              <motion.div variants={item}>
                <label id="email"> Email</label>
                <input
                  type="text"
                  placeholder="example@example.com"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary"
                />
              </motion.div>

              <motion.div variants={item}>
                <label id="password">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary"
                />
              </motion.div>

              <motion.div variants={item}>
                <label id="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secundary"
                />
              </motion.div>

              <motion.div variants={item}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-base-100 w-full border p-3 rounded-xl cursor-pointer hover:bg-base-200 font-bold mt-4 transform-border hover:scale-95"
                >
                  Register
                </motion.button>
              </motion.div>

              <motion.p variants={item} className="text-center mt-5">
                Do you already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </motion.p>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
