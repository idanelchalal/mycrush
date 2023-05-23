import Logo from "@/components/Logo";
import getIsAuthenticated from "@/libs/getIsAuthenticated";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await getIsAuthenticated();
  if (!isAuth) return redirect("/auth");
  return (
    <div className="">
      <main
        id="main-container"
        className="
          select-none
          px-6
          pb-6
          bg-white
          border border-slate-100
          relative
          mx-auto
          my-[2.5vh]
          max-w-screen-sm
          h-[95vh] 
          flex flex-col
          rounded-md 
          items-center
          overflow-hidden
          "
      >
        <Logo size="large" />
        <div className="relative rounded-md h-full w-full py-4 px-6 opacity-70 flex items-center justify-center overflow-hidden">
          <div className="bg-slate-50 absolute w-full h-full"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
