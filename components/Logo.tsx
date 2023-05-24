import { FC, useCallback } from "react";

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
  let logoClasses = useCallback(() => {
    let classes;
    if (size === "large")
      return (classes = `${lobster.className} text-3xl text-pink-200 flex gap-1 items-center justify-center`);

    if (size === "small")
      return (classes = `${lobster.className} text-base text-pink-200 flex gap-1 items-center justify-center`);

    return (classes = `${lobster.className} text-xl text-pink-200 flex gap-1 items-center justify-center`);
  }, [size]);

  return (
    <div
      className="
    relative
    py-6
    cursor-pointer 
    select-none
    flex 
    flex-col
    "
    >
      <span className={logoClasses()}>
        <TbHeartHandshake size={38} className="flex" />
        myCrush
      </span>
    </div>
  );
};

export default Logo;
