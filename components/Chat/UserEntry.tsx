import showDateDifference from '@/libs/showDateDifference'
import { UserId } from '@/next-auth'

import { Message } from '@prisma/client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

interface UserEntryProps {
    user: any & {
        id: UserId
    }
    lastMessage?: Message | null
    chatId: string
}

const UserEntry: FC<UserEntryProps> = ({ user, lastMessage, chatId }) => {
    return (
        <Link href={`/chat/${chatId}`}>
            <article className="relative w-full my-0.5 hover:bg-zinc-50 transition h-full min-h-[3rem] max-h-24 flex items-center cursor-pointer justify-start px-4">
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <div className="border border-zinc-300 overflow-hidden rounded-full relative w-14 h-14">
                        <Image fill alt="profile-img" src={user?.image!} />
                    </div>
                    <h2 className=" text-sm text-zinc-400 font-semibold">
                        {user.name}
                    </h2>
                </div>

                {lastMessage ? (
                    <>
                        <span className="text-sm text-zinc-400 truncate">
                            {lastMessage.content}
                        </span>
                        <div className="absolute right-4 bottom-2">
                            <span className="text-zinc-400 text-xs italic">
                                Sent before{' '}
                                {showDateDifference(lastMessage.createdAt)}
                            </span>
                        </div>
                    </>
                ) : (
                    <span className="text-sm text-zinc-400 truncate italic">
                        No messages..
                    </span>
                )}
            </article>
        </Link>
    )
}

export default UserEntry
