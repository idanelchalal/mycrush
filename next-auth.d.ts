import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import { LocationObject } from './types'
type UserId = string

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId
    }
}

declare module 'next-auth' {
    interface Session {
        userId: string
        location: LocationObject
        maxDistance: Number
        user: User & {
            id: UserId
        }
    }
}
