"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please complete all fields");
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading("Signing in...");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      toast.dismiss(loadingToast);

      if (res?.error) {
        toast.error("Invalid email or password");
        setLoading(false);
        return;
      }

      toast.success("Welcome 🚀");
      router.push("/dashboard");
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong. Try again later");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-base-100">
      <div className="w-full max-w-md lg:max-w-5xl bg-base-200 rounded-2xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* FORM */}
          <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
            className="flex flex-col justify-center px-6 py-10 sm:px-10"
          >
            <Image
              src="/img/Logo.png"
              alt="Logo"
              width={220}
              height={120}
              className="mx-auto mb-6"
            />

            <motion.p
              variants={item}
              className="text-sm text-base-content/70 text-center mb-8"
            >
              It’s your day. You shape it. Sign in to start managing your sales.
            </motion.p>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="mt-1 w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="mt-1 w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              <Button
                className="w-full py-3 rounded-xl font-semibold"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>

              <motion.p
                variants={item}
                className="text-center text-sm mt-4"
              >
                Don’t you have an account?{" "}
                <Link
                  href="/register"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </Link>
              </motion.p>
            </div>
          </motion.form>

          {/* IMAGE – solo desktop */}
          <div className="hidden lg:flex items-center justify-center  p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              <Image
                src="/img/login.png"
                alt="Login illustration"
                width={500}
                height={700}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
