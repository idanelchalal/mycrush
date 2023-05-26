import Header from "@/components/Header";
import MenuModalAdapter from "@/components/Modals/MenuModal/MenuModalAdapter";
import getIsAuthenticated from "@/libs/getIsAuthenticated";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getIsAuthenticated();
  if (!session) return redirect("/auth");
  return (
    <div>
      <MenuModalAdapter session={session} />
      <Toaster />
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
        <Header />
        <div className="relative rounded-md h-full w-full py-4 px-6 opacity-70 flex items-center justify-center overflow-hidden">
          <div className="bg-slate-50 absolute w-full h-full"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
