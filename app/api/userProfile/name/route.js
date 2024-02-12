import { PrismaClient } from "@prisma/client";

export async function POST(request) {

    const res = await request.json()
    const { data, id } = res
    console.log(data);

    const client = new PrismaClient()
    const result = await client.users.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: data
        }
    })

    console.log(result);

    return new Response(JSON.stringify({
        'result': 'ok'
    }))
}