import SkeletonProvider from '@/components/SkeletonProvider'
import Skeleton from 'react-loading-skeleton'

import Swiper from '@/components/Swiper'
import getUsersCards from '@/utils/getUsersCards'

import { FaHeartBroken } from 'react-icons/fa'
import Provider from '@/components/Provider'

interface pageProps {}

const MainPage = async () => {
    let usersCards = await getUsersCards()

    let content = (
        <>
            <Provider>
                <Swiper usersCards={usersCards} />
            </Provider>
        </>
    )

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
                <>{content}</>
                {/* )} */}
            </div>
        </>
    )
}

export default MainPage
