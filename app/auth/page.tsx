import Logo from "@/components/Logo";
import GoogleButton from "@/components/GoogleButton";
import FacebookButton from "@/components/FacebookButton";
import getIsAuthenticated from "@/libs/getIsAuthenticated";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  const session = await getIsAuthenticated();
  if (session) redirect("/");
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
              <h1 className="text-3xl font-semibold text-pink-300">
                Join our community!
              </h1>
              <p className="text-sm text-zinc-300">
                Before we getting started helping you find your next love,
                <br /> let&apos;s make sure you have an account!
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full" id="login-form">
              <GoogleButton />
              <FacebookButton />
              <span className="mx-auto text-zinc-300 text-sm aspect-square">
                <Logo />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
