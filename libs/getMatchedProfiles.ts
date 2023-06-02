import { matchObject } from '@/types'
import client from './prismadb'

const prisma = client

// Gets the 30 last messages of a given chat of 2 users.

async function getChat(firstUserId: string, secondUserId: string) {
    return await prisma.chat.findFirst({
        where: {
            participantsIds: {
                hasEvery: [firstUserId, secondUserId],
            },
        },
        select: {
            id: true,
            createdAt: true,
            messages: {
                take: 30,
                orderBy: {
                    createdAt: 'desc',
                },
            },
        },
    })
}

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
