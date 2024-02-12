import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";


export async function POST(request) {
    try {
        const { email, password } = await request.json()
        console.log({ email, password });
        const hashedPass = await hash(password, 10)
        const prisma = new PrismaClient()
        const response = await prisma.users.create({
            data: {
                email: email,
                password: hashedPass
            }
        })
    }
    catch (e) {
        console.log({ e });
    }

    return Response({ message: 'success' })
}