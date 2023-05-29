import getDb from '@/libs/getDb'
import { LocationObject } from '@/types'

export default async function updateCoords(
    email: string,
    location: LocationObject
) {
    const { db, mongoClient } = await getDb()

    try {
        const usersCollection = db.collection('User')
        const user = await usersCollection.updateOne(
            {
                email: email,
            },
            { $set: { location } }
        )
    } catch (err: any) {
        throw new Error(err.message)
    } finally {
        await mongoClient.close()
    }
}
