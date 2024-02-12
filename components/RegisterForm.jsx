'use client'

export default function RegisterForm() {
    async function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
        console.log({ response });
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    )
}
