import { FC } from "react";

import { IconType } from "react-icons";

interface SwiperButtonProps {
  icon: IconType;
  onClick?: () => void;
  bgColor: string;
  hoverBgColor: string;
  id: string;
}

const SwiperButton: FC<SwiperButtonProps> = ({
  icon: Icon,
  id,
  onClick,
  bgColor,
  hoverBgColor,
}) => {
  return (
    <div
      className={`group rounded-full cursor-pointer aspect-square w-14 flex items-center justify-center 
    ${bgColor} hover:${hoverBgColor}`}
    >
      <Icon
        key={id}
        size={32}
        className="transition scale-75 group-hover:scale-100"
      />
    </div>
  );
};

export default SwiperButton;
