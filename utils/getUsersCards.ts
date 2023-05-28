import getIsAuthenticated from '@/libs/getIsAuthenticated'
import client from '@/libs/prismadb'
import { User } from '@prisma/client'
const prisma = client

// TODO: SET THE CLIENT COORDINATES, SO THE ALGORITHM WILL BE ABLE TO SELECT ONLY DATA ENTITIES WHICH ANSWER THE DISTANCE REQUIREMENTS.
// STEPS:
// 1. UPDATE CLIENT USER COORDS
// 2. CALCULATE THE PREFERED DISTANCE ACCORDING
// 3. SELECT THE RELEVANTE RESULTS

export default async function getUsersCards(session?: any) {
    if (!session) session = await getIsAuthenticated()

    let cards: Array<User>
    try {
        cards = await prisma.user.findMany({
            where: {
                NOT: {
                    email: session.user.email,
                },
            },
        })
    } catch (error: any) {
        throw new Error(error.message)
    }
    return cards
}
