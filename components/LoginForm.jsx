'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const router = useRouter()
    async function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        console.log(response);
        if (!response?.error) {
            router.push('/')
            router.refresh()
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    )
}