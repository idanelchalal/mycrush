import UserEntry from '@/components/Chat/UserEntry'
import getIsAuthenticated from '@/libs/getIsAuthenticated'
import getMatchedProfiles from '@/libs/getMatchedProfiles'
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await getIsAuthenticated()
    if (!session) redirect('/')

    const matchedProfiles = await getMatchedProfiles(session.userId)

    // await client.message.create({
    //     data: {
    //         content: 'HELLO MAN',
    //         receiverId: '6474cf6b367bfe3df68901d3',
    //         senderId: '6474cf76367bfe3df68901d6',
    //         chatId: '6479e4b8abcf90116bbaa730',
    //     },
    // })

    return (
        <>
            <section
                className="h-full w-full justify-evenly px-1
                "
                id="chat-entries-container"
            >
                {matchedProfiles.map((profile) => (
                    <UserEntry
                        chatId={profile.chat?.id}
                        user={profile.user}
                        lastMessage={profile.chat?.messages?.[0]}
                        key={profile.chat?.id + Date.now()}
                    />
                ))}
            </section>
        </>
    )
}

export default page
