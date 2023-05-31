import getIsAuthenticated from '@/libs/getIsAuthenticated'
import getUsersByCoordinates from '@/libs/getUsersByCoordinates'

import client from '@/libs/prismadb'

const prisma = client

export default async function getUsersCards(session?: any) {
    const user = await prisma.user.findUnique({
        where: {
            id: session.userId,
        },
    })

    const users = await getUsersByCoordinates(
        user?.email!,
        user?.location,
        user?.maxDistance,
        user?.likedProfiles || [],
        user?.dislikedProfiles || []
    )

    return users
}
