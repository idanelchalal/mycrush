import { FC } from "react";

import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
});

interface AuthProps {}

const AuthPage: FC<AuthProps> = ({}) => {
  return (
    <>
      <div
        className="login-bg w-screen h-screen flex justify-center items-center"
        id="auth-container"
      >
        <div className="w-full h-full md:h-4/6 md:w-3/6  bg-white border-slate-100 border flex flex-col rounded-md">
          <div className="p-8">
            <h1 className={`text-5xl ${lobster.className} text-sky-200`}>
              Login
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
