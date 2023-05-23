import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const Options: AuthOptions = {
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
  callbacks: {
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  debug: true,
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
};

const handler = NextAuth(Options);

export { handler as GET, handler as POST };
