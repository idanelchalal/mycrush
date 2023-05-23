import { FC } from "react";

import { IconType } from "react-icons";

interface SwiperButtonProps {
  icon: IconType;
  onClick?: () => void;
  bgColor: string;
  hoverBgColor?: string;
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
      onClick={onClick}
      className={`transition scale-75 hover:scale-100 rounded-full cursor-pointer aspect-square w-14 flex items-center justify-center bg-slate-50 shadow-md shadow-gray-400`}
    >
      <Icon key={id} size={32} className={bgColor} />
    </div>
  );
};

export default SwiperButton;
