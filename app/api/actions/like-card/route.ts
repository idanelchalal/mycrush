import { NextResponse } from 'next/server'
import client from '@/libs/prismadb'

const prisma = client

export async function POST(req: Request) {
    const payload = await req.json()

    const userPerformedAction = payload.data.userId
    const likeProfileId = payload.currentCard._id.$oid

    await prisma.user.update({
        where: {
            id: userPerformedAction,
        },
        data: {
            likedProfiles: {
                push: likeProfileId,
            },
        },
    })

    return NextResponse.json('ok')
}
