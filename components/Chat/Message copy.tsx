import { Message } from '@prisma/client'
import Image from 'next/image'
import { FC } from 'react'

interface MessageProps {
    message: Message
    senderName: string | null
    senderAvatar: string | null
    right?: boolean
    renderAvatar: boolean
}

const Message: FC<MessageProps> = ({
    message,
    senderName,
    senderAvatar,
    renderAvatar,
    right = true,
}) => {
    return (
        <>
            <div
                className={`flex flex-col 
                 hover:bg-gray-50 transition gap-x-2
            ${right ? 'justify-end !flex-row-reverse' : ''}
            `}
            >
                {renderAvatar && (
                    <>
                        <div
                            className={`flex flex-row w-full gap-x-2 items-center mx-2 ${
                                right ? 'justify-start !flex-row-reverse' : ''
                            }`}
                        >
                            <div className="relative min-w-[24px] min-h-[24px] w-6 h-6  rounded-full overflow-hidden px-2">
                                <Image
                                    fill
                                    src={senderAvatar!}
                                    alt="message-user-avatar"
                                />
                            </div>
                            <span className="font-semibold zinc-500 text-xs ">
                                {senderName}
                            </span>
                        </div>
                    </>
                )}
            </div>
            <div
                className="max-w-[80%]
                        
                "
            >
                <p
                    className="
                m-1 text-xs text-zinc-400 
                break-before-auto break-words
                bg-secondaryColor/40 rounded-lg
                p-2"
                >
                    {message.content}
                </p>
            </div>
        </>
    )
}

export default Message
