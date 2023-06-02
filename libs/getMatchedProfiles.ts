import { matchObject } from '@/types'
import client from './prismadb'
import getChat from '@/utils/getChat'

const prisma = client

export const getMatchedProfiles = async (userId: string) => {
    // Array of all the id's of the matched profiles
    const matchesArray = await prisma.user
        .findUnique({
            where: {
                id: userId,
            },

            select: { matchedProfiles: true },
        })
        .catch((err) => {
            console.table(err)
        })

    const ids = matchesArray?.matchedProfiles!

    // Recreates match Objects to pass
    const allChats: matchObject[] = await Promise.all(
        ids.map(async (matchedId) => ({
            chat: await getChat(matchedId, userId),
            user: await prisma.user.findUnique({
                where: {
                    id: matchedId,
                },
                select: {
                    image: true,
                    name: true,
                },
            }),
        }))
    )

    return allChats
}

export default getMatchedProfiles
