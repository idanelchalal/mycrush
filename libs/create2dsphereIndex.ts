import getDb from './getDb'
export default async function create2dsphereIndex() {
    try {
        const { db } = await getDb()
        const usersCollection = db.collection('User')

        const indexExists = await usersCollection.indexExists('2dsphere')
        if (!indexExists)
            usersCollection.createIndex({
                location: '2dsphere',
            })
    } catch (error) {
        console.error(
            'ERROR FROM THE INDEXING FUNCTION OF USER COLLECTION: ',
            error
        )
    }
}
