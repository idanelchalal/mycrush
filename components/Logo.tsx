import { TbHeartHandshake } from "react-icons/tb";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
});

const Logo = () => {
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
      <span
        className={`${lobster.className} text-3xl text-white flex gap-1 items-center justify-center`}
      >
        <TbHeartHandshake size={38} className="flex" />
        myCrush
      </span>
    </div>
  );
};

export default Logo;
