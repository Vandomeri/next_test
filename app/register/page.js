import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
    const session = await getServerSession()
    if (session) {
        redirect('/')
    }
    return (
        <RegisterForm />
    )
}
