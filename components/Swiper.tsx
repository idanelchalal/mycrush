'use client'
import { FC, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { FaHeartBroken } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

import axios from 'axios'

import SwiperButton from './SwiperButton'

import { User } from '@prisma/client'

import { useSession } from 'next-auth/react'
import { usePosition } from '@/hooks/usePosition'
import getUsersCards from '@/utils/getUsersCards'
import SkeletonProvider from './SkeletonProvider'
import Skeleton from 'react-loading-skeleton'

const Swiper = () => {
    const [usersCards, setUsersCards] = useState<User[]>([])
    const [currentCard, setCurrentCard] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const { data, update } = useSession()
    const { longitude, latitude } = usePosition()
    const session = data?.user

    const updateLocation = useCallback(async () => {
        await axios.post('/api/actions/set-location', {
            email: data?.user?.email,
            longitude,
            latitude,
        })
    }, [data?.user?.email, longitude, latitude])

    const getCardsByDistance = useCallback(async () => {
        setIsLoading(true)

        if (data?.location) {
            const cards = await axios.post('api/users/get-by-distance', data)
            setUsersCards(cards.data)
        }

        setIsLoading(false)
    }, [data, setIsLoading])

    const likeCard = useCallback(async () => {
        console.log(data)
        if (!currentCard) return
        try {
            const req = await axios.post(`/api/actions/like-card`, {
                session,
                currentCard,
            })

            setUsersCards((prevCards) => {
                return prevCards?.filter((card) => card.id !== currentCard.id)
            })

            if (usersCards && usersCards[0]) setCurrentCard(usersCards[0])
            else setCurrentCard(null)
        } catch (error: any) {
            toast.error('An error ocurred.')
            console.error(error.message)
        }
    }, [currentCard, usersCards, session, setCurrentCard])

    const dislikeCard = useCallback(async () => {
        if (!currentCard) return
        try {
            const req = await axios.post(`/api/actions/dislike-card`, {
                session,
                currentCard,
            })

            setUsersCards((prevCards) => {
                return prevCards?.filter((card) => card.id !== currentCard.id)
            })

            if (usersCards && usersCards[0]) setCurrentCard(usersCards[0])
            else setCurrentCard(null)
        } catch (error: any) {
            toast.error('An error ocurred.')
            console.error(error.message)
        }
    }, [currentCard, usersCards, setCurrentCard, session])

    useEffect(() => {
        if (data?.user?.email && latitude && longitude) updateLocation()
    }, [updateLocation, data?.user?.email, latitude, longitude])

    useEffect(() => {
        ;(async () => {
            await getCardsByDistance()
        })()
    }, [getCardsByDistance])

    useEffect(() => {
        if (usersCards && usersCards.length > 0) setCurrentCard(usersCards[0])
    }, [setCurrentCard, usersCards])

    const uiCardProvider = useCallback(() => {
        if (!isLoading) {
            if (!usersCards || usersCards.length === 0 || !currentCard)
                return (
                    <>
                        <div
                            id="no-people"
                            className="flex flex-col gap-1 justify-center items-center h-full w-full"
                        >
                            <FaHeartBroken className="text-zinc-300 w-16 h-16" />
                            <h1>
                                No people in your distance preferences are
                                found...
                            </h1>
                        </div>
                    </>
                )
            return (
                <>
                    <div className="relative w-full h-full">
                        <Image
                            loading="eager"
                            placeholder="blur"
                            blurDataURL="/profile-mock.jpg"
                            src={currentCard.image || '/profile-mock.jpg'}
                            alt={`user${currentCard.id}-pic`}
                            fill
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover rounded-md"
                        />

                        <div
                            id="buttons-set"
                            className="w-full h-full absolute flex items-end justify-between px-24 pb-10"
                        >
                            <SwiperButton
                                bgColor="text-red-500"
                                icon={AiOutlineClose}
                                id="likebutton"
                                onClick={dislikeCard}
                            />
                            <SwiperButton
                                bgColor="text-green-500"
                                icon={AiFillHeart}
                                id="likebutton"
                                onClick={likeCard}
                            />
                        </div>
                    </div>
                </>
            )
        }
        if (isLoading) {
            return (
                <>
                    <div
                        id="no-people"
                        className="flex flex-col gap-1 justify-center items-center h-full w-full"
                    >
                        Searching for your perfect match...
                    </div>
                </>
            )
        }
    }, [currentCard, usersCards, dislikeCard, likeCard, isLoading])

    return <div className="w-full h-full">{uiCardProvider()}</div>
}

export default Swiper
