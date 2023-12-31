import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400 dark:bg-violet-950 text-black dark:text-white relative">
      <div className="flex flex-col items-center w-full relative transition-all overflow-x-clip">
        <div className="h-48 w-48 bg-purple-500 rounded-full absolute dark:-translate-x-1/2 translate-x-1/2 -top-28  dark:-ml-52 shadow-lg" />
        {children}
        <div className="h-48 w-48 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full dark:translate-x-1/2 absolute -bottom-28 dark:-mr-52 shadow-lg " />
      </div>
    </div>
  );
};

export default AuthLayout;
