import getIsAuthenticated from '@/libs/getIsAuthenticated'
import { redirect } from 'next/navigation'

const page = async ({ params }: { params: { chatId: string } }) => {
    const session = await getIsAuthenticated()
    if (!session) redirect('/')
}

export default page
