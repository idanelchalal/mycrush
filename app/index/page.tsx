import Swiper from '@/components/Swiper'

import Provider from '@/components/Provider'

const MainPage = async () => {
    let content = (
        <>
            <Provider>
                <Swiper />
            </Provider>
        </>
    )

    return (
        <>
            <div className="relative w-full h-full">
                <>{content}</>
            </div>
        </>
    )
}

export default MainPage
