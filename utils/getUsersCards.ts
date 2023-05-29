import getIsAuthenticated from '@/libs/getIsAuthenticated'
import getUsersByCoordinates from '@/libs/getUsersByCoordinates'

import client from '@/libs/prismadb'

const prisma = client

export default async function getUsersCards(session?: any) {
    // if (!session) session = await getIsAuthenticated()
    const users = await getUsersByCoordinates(
        session.user.email,
        session.location,
        session.maxDistance
    )

    return users
}
