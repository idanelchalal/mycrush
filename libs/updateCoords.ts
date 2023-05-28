import { MongoClient } from 'mongodb'
const mongoClient = new MongoClient(process.env.DATABASE_URL as string)

export default async function updateCoords(
    email: string,
    location: LocationObject
) {
    try {
        await mongoClient.connect()
        const db = mongoClient.db('myCrush')
        const usersCollection = db.collection('User')
        usersCollection.createIndex({
            location: '2dsphere',
        })

        const user = await usersCollection.updateOne(
            {
                email: email,
            },
            { $set: { location } }
        )
    } catch (err) {
        console.log(err)
    } finally {
        mongoClient.close()
    }
}
