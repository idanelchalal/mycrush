import { FC, useEffect } from "react";
import Image from "next/image";

import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import SwiperButton from "./SwiperButton";

interface SwiperProps {
  session?: any | null;
}

const errorCallback = () => false;

const getLocation = () => {
  navigator.geolocation.watchPosition((location) => {}, errorCallback, {
    enableHighAccuracy: true,
    timeout: 5000,
  });
};

const Swiper: FC<SwiperProps> = ({}) => {
  useEffect(() => {}, []);

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <Image
          src="/profile-mock.jpg"
          alt="mock of profile"
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
          />
          <SwiperButton
            bgColor="text-green-500"
            icon={AiFillHeart}
            id="likebutton"
          />
        </div>
      </div>
    </div>
  );
};

export default Swiper;
