"use client";

import { FC, useState } from "react";

import { Inter } from "next/font/google";
import Input from "@/components/Input";
import { AiOutlineFacebook, AiOutlineGooglePlus } from "react-icons/ai";

const lobster = Inter({
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
});

interface AuthProps {}

const AuthPage: FC<AuthProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div
        className="login-bg w-screen h-screen flex justify-center items-center"
        id="auth-container"
      >
        <div
          className="
        w-full h-full md:h-3/6 md:w-2/6 
        bg-white border-slate-100 border rounded-md 
        flex flex-col justify-center md:justify-start items-center
        "
        >
          <div className="p-8 flex flex-col gap-10 w-full">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold text-sky-300">
                Join our community!
              </h1>
              <p className="text-sm text-zinc-300">
                Before we getting started helping you find your next love,
                <br /> let&apos;s make sure you have an account!
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full" id="login-form">
              <button className="transition bg-sky-300 hover:bg-sky-200 px-4 py-2 rounded-md text-white flex items-center justify-center gap-2">
                <span>Sign in with</span>
                <AiOutlineGooglePlus size={32} />
              </button>
              <button className="transition bg-sky-300 hover:bg-sky-200 px-4 py-2 rounded-md text-white flex items-center justify-center gap-2">
                <span>Sign in with</span>
                <AiOutlineFacebook size={32} />
              </button>
              <span className="mx-auto my-4 text-zinc-300 text-sm">
                All rights reserved to Idandi &copy;
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
