import { getServerSession } from 'next-auth'
import { Options } from '../app/api/auth/[...nextauth]/route'
export default async function getIsAuthenticated() {
    const session = await getServerSession(Options)
    if (!session) return null

    return session
}
