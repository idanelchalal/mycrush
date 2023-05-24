"use client";
import SkeletonProvider from "@/components/SkeletonProvider";
import Skeleton from "react-loading-skeleton";

import Swiper from "@/components/Swiper";

import { useSession } from "next-auth/react";
import { FC } from "react";
import useMenuStore from "@/services/MenuContext";
import MenuModal from "@/components/Modals/MenuModal/MenuModal";

interface pageProps {}

const MainPage: FC<pageProps> = ({}) => {
  const { data: session, status } = useSession();
  const menuStore = useMenuStore();
  return (
    <>
      <div className="relative w-full h-full">
        {status === "loading" ? (
          <>
            <SkeletonProvider>
              <Skeleton className="h-full w-full" />
            </SkeletonProvider>
          </>
        ) : (
          <>
            <Swiper session={session} />
          </>
        )}
      </div>
    </>
  );
};

export default MainPage;
