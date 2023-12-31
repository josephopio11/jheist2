import { KeyRound, User, UserCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-96 bg-white/20 backdrop-blur-sm rounded-xl z-50 flex flex-col justify-center mx-auto p-10 shadow-lg">
      <div className="w-full">
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          width={200}
          height={200}
          className="mx-auto"
        />
        <form action="" method="POST" className="mx-auto">
          <div className="pt-6 w-full">
            <div className=" text-gray-white  items-center align-middle w-full">
              <label htmlFor="username">Username</label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="bg-white/30 h-10 w-full px-5 rounded-lg border text-sm focus:outline-none placeholder:text-white/50 text-black dark:text-white"
                />
                <UserCircle className="w-6 h-6 text-white absolute right-0 top-0 my-2 mr-2" />
              </div>
            </div>
          </div>
          <div className="pt-6 w-full">
            <div className=" text-gray-white  items-center align-middle w-full">
              <label htmlFor="username">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="bg-white/30 h-10 w-full px-5 rounded-lg border text-sm focus:outline-none placeholder:text-white/50 text-black dark:text-white"
                />
                <KeyRound className="w-6 h-6 text-white absolute right-0 top-0 mt-3 mr-4" />
              </div>
            </div>
          </div>
          <div className="pt-12 w-full">
            <div className="w-full mx-auto">
              <button
                type="submit"
                name="submit"
                className="bg-slate-100 h-10 w-full px-5 rounded-lg border text-sm focus:outline-none placeholder:text-white/50 text-black font-bold"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
