import { FC } from "react";
import Image from "next/image";

import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import SwiperButton from "./SwiperButton";

interface SwiperProps {}

const Swiper: FC<SwiperProps> = ({}) => {
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
            bgColor="bg-red-500"
            hoverBgColor="bg-red-600"
            icon={AiOutlineClose}
            id="likebutton"
          />
          <SwiperButton
            bgColor="bg-green-500"
            hoverBgColor="bg-green-400"
            icon={AiFillHeart}
            id="likebutton"
          />
        </div>
      </div>
    </div>
  );
};

export default Swiper;
