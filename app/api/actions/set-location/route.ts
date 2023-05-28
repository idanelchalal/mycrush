import updateCoords from '@/libs/updateCoords'

export async function POST(req: Request, res: Response) {
    const { email, longitude, latitude } = await req.json()
    try {
        await updateCoords(email, [longitude, latitude])
    } catch (err: any) {
        throw new Error(err.message)
    }

    return res.ok
}
