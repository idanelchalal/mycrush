import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "@/libs/prismadb";

import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";

export const Options: AuthOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: { signIn: "/auth" },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET as string,
  debug: true,
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
};

const handler = NextAuth(Options);

export { handler as GET, handler as POST };
