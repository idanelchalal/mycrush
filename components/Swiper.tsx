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

interface SwiperProps {
    usersCards?: Array<User> | null
}

const Swiper: FC<SwiperProps> = ({ usersCards }) => {
    const [currentCard, setCurrentCard] = useState<User | null>(null)
    const { data } = useSession()
    const { longitude, latitude } = usePosition()
    const session = data?.user

    useEffect(() => {
        if (data?.user?.email) {
            updateLocation()
        }
    }, [data])

    useEffect(() => {
        if (usersCards && usersCards.length > 0) setCurrentCard(usersCards[0])
    }, [setCurrentCard, usersCards])

    const updateLocation = useCallback(async () => {
        await axios.post('/api/actions/set-location', {
            email: data?.user?.email,
            longitude,
            latitude,
        })
        updateLocation()
    }, [data?.user?.email, longitude, latitude])

    const likeCard = useCallback(async () => {
        if (!currentCard) return
        try {
            await axios.post(`/api/actions/like-card`, {
                session,
                currentCard,
            })
        } catch (error: any) {
            toast.error('An error ocurred.')
            console.error(error.message)
        }

        usersCards = usersCards?.filter((card) => card.id !== currentCard.id)
        if (usersCards && usersCards[0]) setCurrentCard(usersCards[0])
        else setCurrentCard(null)
    }, [currentCard, session])

    const dislikeCard = useCallback(async () => {}, [currentCard])

    const uiCardProvider = useCallback(() => {
        if (!usersCards || usersCards.length === 0 || !currentCard)
            return (
                <>
                    <div
                        id="no-people"
                        className="flex flex-col gap-1 justify-center items-center h-full w-full"
                    >
                        <FaHeartBroken className="text-zinc-300 w-16 h-16" />
                        <h1>
                            No people in your distance preferences are found...
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
    }, [currentCard, usersCards, dislikeCard, likeCard])

    return <div className="w-full h-full">{uiCardProvider()}</div>
}

export default Swiper
