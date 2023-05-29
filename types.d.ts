import { User } from '@prisma/client'

type LocationObject = {
    type: 'Point'
    coordinates: [longtiude: Number, latitude: Number]
}
