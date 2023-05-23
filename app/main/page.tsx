import Swiper from "@/components/Swiper";
import { FC } from "react";

interface pageProps {}

const MainPage: FC<pageProps> = ({}) => {
  return (
    <div className="relative w-full h-full">
      <Swiper />
    </div>
  );
};

export default MainPage;
