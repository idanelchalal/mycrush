import React, { useEffect, useState } from 'react'

export const usePosition = () => {
    const [coords, setCoords] = useState<{
        longitude: Number | null
        latitude: Number | null
    }>({ longitude: null, latitude: null })

    useEffect(() => {
        let watchId: any = null

        const successCallback = (position: any) => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            setCoords({ latitude, longitude })
        }

        const errorCallback = (error: any) => {
            console.table(error)
            throw new Error('usePosition: Error retrieving location:', error)
        }

        // Start watching for location updates
        if (navigator.geolocation) {
            watchId = navigator.geolocation.watchPosition(
                successCallback,
                errorCallback,
                {
                    enableHighAccuracy: true,
                }
            )
        } else {
            throw new Error('Geolocation is not supported by this browser.')
        }

        // Clean up by stopping location updates when component unmounts
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId)
            }
        }
    }, [])

    return { longitude: coords.longitude, latitude: coords.latitude }
}
