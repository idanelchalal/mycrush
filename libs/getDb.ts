import { MongoClient } from 'mongodb'
const mongoClient = new MongoClient(process.env.DATABASE_URL as string)

const getDb = async () => {
    try {
        await mongoClient.connect()
        const db = mongoClient.db('myCrush')
        return { db, mongoClient }
    } catch (err: any) {
        throw new Error(err.message)
    }
}

export default getDb
