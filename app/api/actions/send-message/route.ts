import client from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const message = await req.json()
    if (
        !message ||
        !message.content ||
        !message.senderId ||
        !message.receiverId ||
        !message.chatId
    )
        return NextResponse.json(
            'An error ocurred while sending the message: one of the fields of Message object is empty.'
        )

    if (message.content === 0) {
        return NextResponse.json('Message is empty.')
    }

    const createdMessage = await client.message.create({
        data: {
            content: message.content,
            receiverId: message.receiverId,
            senderId: message.senderId,
            chatId: message.chatId,
        },
    })

    return NextResponse.json(createdMessage)
}
