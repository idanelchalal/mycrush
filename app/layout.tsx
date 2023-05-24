import MenuModal from "@/components/Modals/MenuModal/MenuModal";
import "./globals.css";
import { Inter } from "next/font/google";
import MenuModalAdapter from "@/components/Modals/MenuModal/MenuModalAdapter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Crush - Meeting has never been easier",
  description: "Meeting application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>{children}</body>
    </html>
  );
}
