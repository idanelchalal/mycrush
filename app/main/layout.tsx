import Logo from "@/components/Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-[5%] lg:px-[20%]">
      <main
        id="main-container"
        className="
          px-6
          pb-6
          bg-white
          border border-slate-100
          relative
          mx-auto
          my-[2.5vh]
          h-[95vh] 
          flex flex-col
          rounded-md 
          items-center
          overflow-hidden
          "
      >
        <div
          id="container-bg"
          className="absolute app-gradient w-full h-full"
        ></div>
        <Logo />
        <div className="relative rounded-md h-full w-full py-4 px-6 opacity-70 flex items-center justify-center overflow-hidden">
          <div className="bg-slate-50 absolute w-full h-full"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
