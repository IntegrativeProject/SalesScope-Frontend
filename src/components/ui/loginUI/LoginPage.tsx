"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
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

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 w-300 h-screen">
        <div className="flex items-center justify-center">
          <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-md mx-auto p-2 flex justify-center flex-col"
          >
            <motion.div variants={item}>
              <Image
                src="/img/Logo.png"
                alt="Logo"
                width={350}
                height={250}
                className="flex items-center mx-auto"
              />
            </motion.div>

            <motion.p variants={item} className="font-semibold p-4 mb-8">
              Its your day. You shape it. Sign in to start managing your sales.
            </motion.p>

            <div className="mb-4 space-y-6">
              <motion.div variants={item}>
                <label id="email">Email</label>
                <input
                  type="text"
                  placeholder="example@example.com"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secundary"
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
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Button className="bg-base-100 w-full border p-3 rounded-xl cursor-pointer hover:bg-base-200 font-bold mt-4 transform-border hover:scale-95">
                    Sign-in
                  </Button>
                </motion.div>
              </motion.div>

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
