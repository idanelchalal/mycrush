import UserEntry from '@/components/Chat/UserEntry'
import getIsAuthenticated from '@/libs/getIsAuthenticated'
import getMatchedProfiles from '@/libs/getMatchedProfiles'
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await getIsAuthenticated()
    if (!session) redirect('/')

    const matchedProfiles = await getMatchedProfiles(session.userId)

    return (
        <>
            <section
                className="h-full w-full justify-evenly px-1
                "
                id="chat-entries-container"
            >
                {matchedProfiles.map((profile) => (
                    <UserEntry
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
