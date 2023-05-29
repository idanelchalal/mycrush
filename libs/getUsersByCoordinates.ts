import client from './prismadb'
const { ObjectId } = require('mongodb')

const getUsersByCoordinates = async (
    email: string,
    location: any,
    maxDistance?: number,
    likedProfiles?: Array<any>
) => {
    // NEED TO IMPLEMENT A SEARCH BASED ON AN ARRAY
    const likedProfileIds = likedProfiles?.map((id) => {
        return { $oid: new ObjectId(id) }
    })

    // TODO: IMPLEMENT THIS FOR DISLIKED PROFILES
    // const dislikedProfiles = dislikedProfiles?.map((id) => {
    //     return { $oid: new ObjectId(id) }
    // })

    const result = await client.user.findRaw({
        filter: {
            email: {
                $ne: email,
            },

            _id: {
                $nin: likedProfileIds,
                // IMPLEMENT HERE ANOTHER FIELD FOR DISLIKED PROFILES
                // $nin: dislikedProfileIds,
            },

            location: {
                $near: {
                    $geometry: {
                        type: location.type,
                        coordinates: location.coordinates,
                    },
                    $maxDistance: maxDistance,
                },
            },
        },
    })

    return result
}

export default getUsersByCoordinates
