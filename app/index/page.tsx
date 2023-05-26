import SkeletonProvider from "@/components/SkeletonProvider";
import Skeleton from "react-loading-skeleton";

import Swiper from "@/components/Swiper";
import getUsersCards from "@/utils/getUsersCards";

import {FaHeartBroken} from 'react-icons/fa'
import Provider from "@/components/Provider";

interface pageProps {}

const MainPage = async () => {
  
  let usersCards = await getUsersCards()

  let content = <>
  <Provider>
    <Swiper usersCards={usersCards} />
  </Provider>
  </>
  if (!usersCards ||usersCards && usersCards.length == 0)
    content = <>
    <div id='no-people' className="flex justify-center items-center h-full w-full">
      <h1>
        <FaHeartBroken className="text-zinc-300 w-16 h-16" />
        No people in your distance preferences we&apos;re found...
      </h1>
      </div>
    </>

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
        {
          content
        }
        </>
        {/* )} */}
      </div>
    </>
  );
};

export default MainPage;
