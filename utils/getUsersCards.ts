import client from "@/libs/prismadb";
import { User } from "@prisma/client";
const prisma = client


export default async function getUsersCards (){
    let cards:Array<User>;
    try {
        cards = await prisma.user.findMany({})
    } catch (error:any) {
        throw new Error(error.message)
    }
    return cards
}