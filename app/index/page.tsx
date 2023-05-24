import SkeletonProvider from "@/components/SkeletonProvider";
import Skeleton from "react-loading-skeleton";

import Swiper from "@/components/Swiper";
import getIsAuthenticated from "@/libs/getIsAuthenticated";

interface pageProps {}

const MainPage = async () => {
  return (
    <>
      <div className="relative w-full h-full">
        {/* {status === "loading" ? (
          <>
            <SkeletonProvider>
              <Skeleton className="h-full w-full" />
            </SkeletonProvider>
          </>
        ) : ( */}
        <>
          <Swiper />
        </>
        {/* )} */}
      </div>
    </>
  );
};

export default MainPage;
