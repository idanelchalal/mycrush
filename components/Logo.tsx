import { FC } from "react";

import { TbHeartHandshake } from "react-icons/tb";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
});

interface LogoProps {
  size?: "base" | "small" | "large";
}

const Logo: FC<LogoProps> = ({ size = "base" }) => {
  let logoClasses = `${lobster.className} text-xl text-pink-200 flex gap-1 items-center justify-center`;

  if (size === "large")
    logoClasses = `${lobster.className} text-3xl text-pink-200 flex gap-1 items-center justify-center`;

  if (size === "small")
    logoClasses = `${lobster.className} text-base text-pink-200 flex gap-1 items-center justify-center`;

  return (
    <div
      className="
    relative
    py-6
    cursor-pointer 
    select-none
    flex 
    flex-col
    w-full
    "
    >
      <span className={logoClasses}>
        <TbHeartHandshake size={38} className="flex" />
        myCrush
      </span>
    </div>
  );
};

export default Logo;
