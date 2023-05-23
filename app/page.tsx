import getIsAuthenticated from "@/libs/getIsAuthenticated";
import { redirect } from "next/navigation";

export default async function Home() {
  const isAuthenticated = await getIsAuthenticated();
  if (!isAuthenticated) redirect("/auth");
  return redirect("/index");
}
