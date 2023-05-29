import updateCoords from '@/libs/updateCoords'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { email, longitude, latitude } = await req.json()

    try {
        await updateCoords(email, {
            type: 'Point',
            coordinates: [longitude, latitude],
        })
    } catch (err: any) {
        throw new Error(err.message)
    }

    return NextResponse.json({ status: 200 })
}
