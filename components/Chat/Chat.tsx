import { Chat, Message } from '@prisma/client'
import Image from 'next/image'
import { FC } from 'react'
import { IoSend } from 'react-icons/io5'

interface ChatProps {
    chat: Chat | null
    receiverAvatar?: string | null
    receiverName?: string | null
    currentAvatar?: string | null
    currentName?: string | null
}

const Chat: FC<ChatProps> = ({ chat, receiverAvatar, receiverName }) => {
    return (
        <div className="w-full h-full py-2 flex flex-col gap-y-1">
            <div className="flex justify-center items-center gap-x-3 hover:bg-slate-50 transition">
                <div className="relative w-8 h-8 overflow-hidden rounded-full">
                    <Image
                        src={receiverAvatar ? receiverAvatar : '/'}
                        fill
                        alt="matched-profile-avatar"
                    />
                </div>
                <span className="font-semibold text-secondaryColor">
                    {receiverName}
                </span>
            </div>
            <article className="w-full h-[85%] bg-slate-50 mx-auto p-2 overflow-y-scroll overflow-x-hidden ">
                <div
                    className="w-full h-full bg-white rounded-md relative"
                    id="chat-container"
                ></div>
            </article>
            <div className="px-4 h-[15%] relative">
                <textarea
                    placeholder="Enter a message..."
                    className="w-full h-full  resize-none rounded-md italic text-sm p-4"
                ></textarea>
                <button
                    className="
                mt-1
                flex
                justify-center items-center
                gap-1
                px-4 py-2 rounded-md bg-secondaryColor/60 hover:bg-secondaryColor transition  absolute bottom-1 right-5"
                >
                    <IoSend className="text-white" />
                    <span className="text-white">Send!</span>
                </button>
            </div>
        </div>
    )
}

export default Chat
