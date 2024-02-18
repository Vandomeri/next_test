import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

async function sendToTg(formData) {
    'use server'
    const msg = formData.get('msg')

    const prisma = new PrismaClient()

    const resp = await prisma.users.findFirst({
        where: {
            id: parseInt(msg)
        }
    })
    console.log(resp);
    if (resp) {
        redirect('/')
    }
}

export default function SendToTgForm() {

    return (
        <form action={sendToTg}>
            <input name="msg" className="border p-4" type="text" />
            <button>Отправить</button>
        </form>
    )
}
