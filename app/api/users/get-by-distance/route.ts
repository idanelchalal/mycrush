import getUsersCards from '@/utils/getUsersCards'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const session = await req.json()
    const users = await getUsersCards(session)

    return NextResponse.json(users)
}
