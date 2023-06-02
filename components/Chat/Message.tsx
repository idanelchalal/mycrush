import { Message } from '@prisma/client'
import { FC } from 'react'

const Message: FC<Message> = ({
    chatId,
    content,
    createdAt,
    id,
    receiverId,
    senderId,
}) => {
    return <div>Message</div>
}

export default Message
