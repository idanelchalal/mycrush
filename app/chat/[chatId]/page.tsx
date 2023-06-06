import Chat from '@/components/Chat/Chat'
import getIsAuthenticated from '@/libs/getIsAuthenticated'
import client from '@/libs/prismadb'
import { getChatById } from '@/utils/getChat'
import { redirect } from 'next/navigation'

const page = async ({ params }: { params: { chatId: string } }) => {
    const session = await getIsAuthenticated()
    if (!session) redirect('/')

    const chat = await getChatById(params.chatId, 20)
    const matchIdIdx = chat?.participantsIds.findIndex(
        (id) => id !== session.userId
    )

    const matchAvatar = await client.user.findUnique({
        where: {
            id: chat?.participantsIds[matchIdIdx!],
        },
        select: {
            image: true,
            name: true,
        },
    })

    return (
        <>
            <Chat
                session={session}
                chat={chat}
                receiverAvatar={matchAvatar!.image}
                receiverName={matchAvatar!.name}
                currentName={session!.user!.name!}
                currentAvatar={session!.user!.image!}
            />
        </>
    )
}

export default page
