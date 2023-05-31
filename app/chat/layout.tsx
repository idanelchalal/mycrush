import { IoReturnUpBackOutline } from 'react-icons/io5'

import { Toaster } from 'react-hot-toast'

import { redirect } from 'next/navigation'

import getIsAuthenticated from '@/libs/getIsAuthenticated'
import Link from 'next/link'

const layout = async ({ children }: { children?: React.ReactNode }) => {
    const session = await getIsAuthenticated()

    if (!session) redirect('/')
    return (
        <main
            id="main-container"
            className="
          select-none
          px-6
          pb-6
          bg-white
          border border-slate-100
          relative
          mx-auto
          my-[2.5vh]
          max-w-screen-sm
          h-[95vh] 
          flex flex-col
          rounded-md 
          items-center
          overflow-hidden
          "
        >
            <Toaster />
            <div className="absolute w-full left-4 top-4">
                <Link href={'/'} className="">
                    <IoReturnUpBackOutline
                        className={`transition cursor-pointer hover:bg-gray-50 rounded-full w-14 h-14 p-2 text-secondaryColor flex items-center justify-center`}
                    />
                </Link>
            </div>
            {children}
        </main>
    )
}

export default layout
