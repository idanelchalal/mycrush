import { PrismaAdapter } from '@next-auth/prisma-adapter'
import client from '@/libs/prismadb'

import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'

import GoogleProvider from 'next-auth/providers/google'

import create2dsphereIndex from '@/libs/create2dsphereIndex'

export const Options: AuthOptions = {
    adapter: PrismaAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],

    pages: { signIn: '/auth' },
    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async session({ session, token, user }) {
            const location = token.location
            const maxDistance = token.maxDistance
            return { ...session, location, maxDistance }
        },

        async jwt({ user, account, token }) {
            // CREATES the index only on the first time (LOGIC IMPLEMENTED INSIDE)
            // await create2dsphereIndex()

            if (account) {
                token.accessToken = account.access_token
            }

            if (user && user.email) {
                await client.user
                    .findUnique({
                        where: {
                            email: user.email,
                        },
                    })
                    .then((res) => {
                        token.maxDistance = res?.maxDistance
                    })
            }
            if (token.location === null || token.location === undefined)
                if (token.email)
                    await client.user
                        .findUnique({
                            where: {
                                email: token.email,
                            },
                        })
                        .then((res) => {
                            token.id = res!.id
                            token.location = res?.location
                        })

            return token
        },
    },
    secret: process.env.NEXTAUTH_SECRET as string,
    debug: process.env.NODE_ENV === 'development',
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },
}

const handler = NextAuth(Options)

export { handler as GET, handler as POST }
