import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Provider from "@/components/Provider";
import getIsAuthenticated from "@/libs/getIsAuthenticated";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getIsAuthenticated();
  // if (!session) return redirect("/auth");
  return (
    <Provider>
      <div>
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
    </Provider>
  );
}
