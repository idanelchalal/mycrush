'use client'
import { Chat, Message as MessageType } from '@prisma/client'
import Image from 'next/image'
import { FC, useCallback, useEffect, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import Message from './Message'
import axios from 'axios'
import { toast } from 'react-hot-toast'

interface ChatProps {
    session: any
    chat: (Chat & { messages: MessageType[] }) | null
    receiverAvatar: string | null
    receiverName: string | null
    currentAvatar: string | null
    currentName: string | null
}

const Chat: FC<ChatProps> = ({
    chat,
    receiverAvatar,
    receiverName,
    session,
    currentAvatar,
    currentName,
}) => {
    const [messages, setMessages] = useState(chat?.messages || [])
    const [message, setMessage] = useState('')

    const handleSend = useCallback(async () => {
        if (!message) return

        let receiverFinder = chat?.participantsIds.filter(
            (id) => id === session.userId
        )
        let foundReceiverId = receiverFinder?.[0]
        if (!foundReceiverId)
            toast.error('An error ocurred while sending a message.')

        const newMessage = {
            senderId: session.userId,
            receiverId: foundReceiverId,
            chatId: chat?.id,
            content: message,
        }
        try {
            const sentMessage = await axios.post(
                '/api/actions/send-message',
                newMessage
            )
            const receivedData = sentMessage.data as MessageType

            setMessages((oldMessages) => {
                const newMessages = [...oldMessages, receivedData]

                return newMessages
            })
        } catch (err) {
            toast.error('An error ocurred while sending a message.')
        } finally {
            setMessage('')
        }
    }, [chat?.id, chat?.participantsIds, session.userId, message])

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
            <article className="w-full h-[85%] bg-slate-50 mx-auto py-2 px-4 overflow-y-scroll overflow-x-hidden ">
                <div
                    className="w-full h-full bg-white rounded-md relative"
                    id="chat-container"
                >
                    {messages.map((message, index) => {
                        const lastMessageSameSender =
                            messages[index - 1] !== undefined &&
                            messages[index - 1].senderId === message.senderId

                        return (
                            <Message
                                key={message.id}
                                currentAvatar={currentAvatar!}
                                currentName={currentName!}
                                lastMessageSameSender={lastMessageSameSender}
                                message={message}
                                receiverAvatar={receiverAvatar!}
                                receiverName={receiverName!}
                                session={session}
                            />
                        )
                    })}
                </div>
            </article>
            <div className="px-4 h-[15%] relative">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter a message..."
                    className={`w-full h-full  resize-none rounded-md text-sm p-4 ${
                        message ? '' : 'italic'
                    }`}
                ></textarea>
                <button
                    disabled={!message}
                    onClick={handleSend}
                    className="disabled:cursor-not-allowed
                    disabled:hover:bg-secondaryColor/60
                mt-1
                flex
                justify-center items-center
                gap-1
                px-4 py-2 rounded-md bg-secondaryColor/60 hover:bg-secondaryColor transition  absolute bottom-1 right-5"
                >
                    <IoSend className="text-white" />{' '}
                    <span className="text-white">Send</span>
                </button>
            </div>
        </div>
    )
}

export default Chat
