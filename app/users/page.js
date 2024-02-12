import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PrismaClient } from '@prisma/client'
export const metadata = {
    title: 'Users Page'
}


async function getData() {
    const client = new PrismaClient()
    const resp = await client.users.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return resp
}


export default async function Users() {

    const data = await getData()
    return (
        <div>
            <Link href="/users/profile">Profile</Link>
            {

                data.map((data) => (
                    <div>
                        <Link href={`/users/${data.id}`}> {data.name} | {data.email}</Link>
                    </div>
                ))

            }
        </div>
    )
}
