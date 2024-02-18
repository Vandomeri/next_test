import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"
import { redirect } from 'next/navigation'


async function registerUser(formData) {
    'use server'
    let result
    try {
        const { email, password } = Object.fromEntries(formData)
        const hashedPass = await hash(password, 10)
        const prisma = new PrismaClient()
        const response = await prisma.users.create({
            data: {
                email: email,
                password: hashedPass
            }
        })
        console.log(response);

        return {
            message: 'tttt'
        }
    }
    catch (e) {
        console.log({ e });
    }


    if (result)
        return redirect('/')

}


export default function RegisterForm() {

    return (
        <form action={registerUser}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    )
}
