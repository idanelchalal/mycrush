import { FC } from "react";
import { IconType } from "react-icons";

interface MenuOptionProps {
  onClick?: () => void;
  color?: string;
  size?: string;
  icon?: IconType;
  children: React.ReactNode;
}

const MenuOption: FC<MenuOptionProps> = ({
  color = "text-secondaryColor",
  onClick,
  icon: Icon,
  size = "text-lg",
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${size} ${color} rounded-md flex gap-1 py-3 px-6 items-center hover:bg-zinc-100 transition cursor-pointer`}
    >
      {Icon && <Icon size={24} />}
      <span>{children}</span>
    </div>
  );
};

export default MenuOption;
