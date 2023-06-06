import client from '@/libs/prismadb'

async function getChat(
    firstUserId: string,
    secondUserId: string,
    messagesLimit?: number
) {
    return await client.chat.findFirst({
        where: {
            participantsIds: {
                hasEvery: [firstUserId, secondUserId],
            },
        },
        select: {
            id: true,
            createdAt: true,
            messages: {
                take: messagesLimit ? messagesLimit : 1,
                orderBy: {
                    createdAt: 'desc',
                },
            },
        },
    })
}

export async function getChatById(chatId: string, messagesLimit: number) {
    return await client.chat.findFirst({
        where: {
            id: chatId,
        },
        select: {
            id: true,
            createdAt: true,
            participantsIds: true,
            messages: {
                take: messagesLimit ? messagesLimit : 1,
                orderBy: {
                    createdAt: 'asc',
                },
            },
        },
    })
}

export default getChat
