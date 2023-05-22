import Swiper from "@/components/Swiper";
import { FC } from "react";

interface pageProps {}

const MainPage: FC<pageProps> = ({}) => {
  return (
    <div className="relative bg-red-300 w-full h-full">
      <Swiper />
    </div>
  );
};

export default MainPage;
