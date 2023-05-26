'use client'
import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import SwiperButton from "./SwiperButton";
import { User } from "@prisma/client";
import axios from "axios";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

interface SwiperProps {
  usersCards?: Array<User> | null
}




const errorCallback = () => false;

const getLocation = () => {
  navigator.geolocation.watchPosition((location) => {}, errorCallback, {
    enableHighAccuracy: true,
    timeout: 5000,
  });
};

const Swiper: FC<SwiperProps> = ({usersCards}) => {
  const [currentCard, setCurrentCard] = useState<User | null>()
  const {data} = useSession()
  const session =data?.user
  useEffect(()=> {
    if (usersCards && usersCards.length >0)
      setCurrentCard(usersCards[0])

  },[setCurrentCard, usersCards])




  const likeCard = useCallback(async()=>{
    if (!currentCard) return
    try {
      await axios.post(`/api/actions/like-card`,{        
        session,
        currentCard
      },{
        
      })
    } catch (error:any) {
      toast.error('An error ocurred.')
      console.error(error.message)
    }
    
    usersCards = usersCards?.filter(card=> card.id !== currentCard.id)
    if (usersCards && usersCards[0])
      setCurrentCard(usersCards[0])
    
    else setCurrentCard(null)

    

  },[currentCard,session])

  const dislikeCard = useCallback(async()=>{

  },[currentCard])

  const uiCardProvider = useCallback(()=>{
    if (!currentCard) return
    return(
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
  }, [currentCard])


  return (
    <div className="w-full h-full">
      {uiCardProvider()}
    </div>
  );
};

export default Swiper;
