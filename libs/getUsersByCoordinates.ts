import { LocationObject } from '@/types'
import getDb from './getDb'
import { User } from '@prisma/client'
import client from './prismadb'

const getUsersByCoordinates = async (
    email: string,
    location: any,
    maxDistance?: number
) => {
    const result = await client.user.findRaw({
        filter: {
            email: {
                $ne: email,
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
