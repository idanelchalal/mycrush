import { IoChatbox, IoReturnUpBackOutline } from 'react-icons/io5'

import { Toaster } from 'react-hot-toast'

import { redirect } from 'next/navigation'

import getIsAuthenticated from '@/libs/getIsAuthenticated'
import Link from 'next/link'
import Title from '@/components/Title'

const layout = async ({ children }: { children?: React.ReactNode }) => {
    const session = await getIsAuthenticated()

    if (!session) redirect('/')
    return (
        <main
            id="main-container"
            className="
          select-none
          
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
            <div className="h-20 bg-secondaryColor w-full">
                <div className="absolute left-4 top-4">
                    <Link href={'/'} className="">
                        <IoReturnUpBackOutline
                            className={`transition cursor-pointer hover:bg-gray-50/20 rounded-full w-14 h-14 p-2 text-white flex items-center justify-center`}
                        />
                    </Link>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <Title label="Chats" color="text-white" icon={IoChatbox} />
                </div>
            </div>
            {children}
        </main>
    )
}

export default layout
