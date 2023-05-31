import client from './prismadb'
const { ObjectId } = require('mongodb')

const getUsersByCoordinates = async (
    email: string,
    location: any,
    maxDistance?: number,
    likedProfiles?: Array<any>,
    dislikedProfiles?: Array<any>
) => {
    // NEED TO IMPLEMENT A SEARCH BASED ON AN ARRAY
    const likedProfileIds = likedProfiles?.map((id) => {
        return { $oid: new ObjectId(id) }
    }) as Array<any>

    const dislikedProfilesIds = dislikedProfiles?.map((id) => {
        return { $oid: new ObjectId(id) }
    }) as Array<any>

    let finalIdsArray: Array<any> = [...dislikedProfilesIds, ...likedProfileIds]
    finalIdsArray = finalIdsArray.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
    )

    const result = await client.user.findRaw({
        filter: {
            email: {
                $ne: email,
            },

            _id: {
                $nin: finalIdsArray,
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
