import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";

const FacebookButton = () => {
  return (
    <button className="transition bg-primaryColor hover:bg-secondaryColor px-4 py-2 rounded-md text-white flex items-center justify-center gap-2">
      <span>Sign in with</span>
      <AiOutlineFacebook size={32} />
    </button>
  );
};

export default FacebookButton;
