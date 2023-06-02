import { NextResponse } from 'next/server'
import client from '@/libs/prismadb'

const prisma = client

export async function POST(req: Request) {
    const payload = await req.json()

    const userPerformedAction = payload.data.userId
    const likeProfileId = payload.currentCard._id.$oid

    // Updating the action performer likes list
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

    // Checking whether the profile who received the like also liked the person who liked him.

    const likedUser = await prisma.user.findFirst({
        where: {
            id: likeProfileId,
            likedProfiles: {
                has: userPerformedAction,
            },
        },
    })

    if (likedUser) {
        // If users have liked each other, updating the MatchedProfiles array in the Db.

        // Liked user
        await prisma.user.update({
            where: {
                id: likedUser.id,
            },
            data: {
                matchedProfiles: {
                    push: userPerformedAction,
                },
            },
        })

        // User who liked.
        await prisma.user.update({
            where: {
                id: userPerformedAction,
            },
            data: {
                matchedProfiles: {
                    push: likeProfileId,
                },
            },
        })

        return NextResponse.json({
            match: true,
            message: 'New match with ' + likedUser.name,
            likedProfileImg: likedUser.image,
        })
    }

    return NextResponse.json('ok')
}
