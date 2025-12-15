import Link from "next/link";
import Image from "next/image";
import Button from "../Button";

export default function LoginPage() {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-2 w-300 h-screen ">
        <div className="flex items-center justify-center  ">
          <form className="max-w-md mx-auto p-2  flex justify-center flex-col">
            <Image
              src="/img/Logo.png"
              alt="Logo"
              width={350}
              height={250}
              className=" flex items-center mx-auto"
            />
            <p className="font-semibold p-4 mb-8">
              Its your day. You shape it. Sign in to start managing your sales.
            </p>

            <div className="mb-4 space-y-6">
              <label id="email">Email</label>
              <input
                type="text"
                placeholder="example@example.com"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secundary "
              />

              <label id="password">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:secundary "
              />

              <Button className="bg-base-100 w-full border p-3 rounded-xl cursor-pointer hover:bg-base-200  font-bold mt-4 transform-border hover:scale-95">
                Sign-in
              </Button>

              <p className="text-center text-sm mt-5">
                Don’t you have an account?{" "}
                <Link
                  href="/register"
                  className=" hover:underline text-primary"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className=" flex items-center justify-center rounded-lg ">
          <Image
            src="/img/login.png"
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
