import EditablField from "@/components/EditablField"
import UserName from "@/components/UserName"
import { PrismaClient } from "@prisma/client"

async function getUserById(id) {
    const client = new PrismaClient()
    const resp = client.users.findFirstOrThrow({
        where: {
            id: parseInt(id)
        }
    })
    return resp
}

export default async function UsersById({ params: { id } }) {
    const user = await getUserById(id)
    return (
        <div className="flex flex-col gap-y-8">
            <EditablField id={id} api={`/api/userProfile/name`} name="Имя" value={user.name} />
            <EditablField id={id} api={`/api/userProfile/email`} name="E-mail" value={user.email} />
        </div>
    )
}
