import { Message } from '@prisma/client'
import Image from 'next/image'
import { FC } from 'react'

interface MessageProps {
    message: Message
    lastMessageSameSender: boolean
    currentName: string
    currentAvatar: string
    receiverName: string
    receiverAvatar: string
    session: any
}

const Message: FC<MessageProps> = ({
    session,
    message,
    currentAvatar,
    currentName,
    receiverAvatar,
    receiverName,
    lastMessageSameSender,
}) => {
    if (session.userId === message.senderId)
        return (
            <>
                <div
                    className="flex flex-col gap-y-2 group"
                    id="message-container"
                >
                    {!lastMessageSameSender && (
                        <div className="w-full flex justify-end">
                            <div className="cursor-pointer flex flex-row gap-x-2 pt-4 px-4">
                                <span className="font-semibold text-xs">
                                    {currentName}
                                </span>
                                <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden ">
                                    <Image
                                        alt="sender-avatar"
                                        key={message.id}
                                        src={currentAvatar!}
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <article
                        id="message-article"
                        className="flex flex-col text-right px-4 group-hover:bg-gray-50 transition"
                    >
                        <p className="text-xs text-zinc-400 max-w-full break-before-auto break-words">
                            {message.content}
                        </p>
                    </article>
                </div>
            </>
        )
    return (
        <>
            <div className="flex flex-col gap-y-2 group" id="message-container">
                {!lastMessageSameSender && (
                    <div className="w-full flex-row-reverse">
                        <div className="cursor-pointer flex flex-row gap-x-2 pt-4 px-4">
                            <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden ">
                                <Image
                                    alt="sender-avatar"
                                    key={message.id}
                                    src={receiverAvatar!}
                                    fill
                                />
                            </div>
                            <span className="font-semibold text-xs">
                                {receiverName}
                            </span>
                        </div>
                    </div>
                )}
                <article
                    id="message-article"
                    className="flex flex-col text-left px-4 group-hover:bg-gray-50 transition"
                >
                    <p className="text-xs text-zinc-400 max-w-full break-before-auto break-words">
                        {message.content}
                    </p>
                </article>
            </div>
        </>
    )
}

export default Message
