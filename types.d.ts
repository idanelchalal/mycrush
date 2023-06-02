import { Chat, User } from '@prisma/client'

type LocationObject = {
    type: 'Point'
    coordinates: [longtiude: Number, latitude: Number]
}

type matchObject = {
    chat: { messages: Message[] | null; createdAt: Date; id: any } | null
    user: {
        image: string | null
        name: string | null
    } | null
}
