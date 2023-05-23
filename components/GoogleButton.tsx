"use client";

import { signIn } from "next-auth/react";
import { AiOutlineGooglePlus } from "react-icons/ai";

const GoogleButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="transition bg-pink-300 hover:bg-pink-200 px-4 py-2 rounded-md text-white flex items-center justify-center gap-2"
    >
      <span>Sign in with</span>
      <AiOutlineGooglePlus size={32} />
    </button>
  );
};

export default GoogleButton;
