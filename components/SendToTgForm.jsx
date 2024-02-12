'use client'

import { useState } from "react"

export default function SendToTgForm() {
    const [input, setInput] = useState('')
    const [status, setStatus] = useState('')
    async function send() {
        const response = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify({
                'data': input
            })
        })

        const result = await response.json()
        console.log(result);
        if (result.result === true) {
            setStatus('ok')
        }
    }

    return (
        <form>
            <input className="border p-4" type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
            {
                status && (<p className={
                    status === 'ok' ? 'text-green-400' : 'text-red-400'}>

                    {status === 'ok' ? 'Сообщение отправлено успешно' : 'Сообщение не отправлено'}

                </p>)
            }
            <button
                onClick={(e) => {
                    e.preventDefault()
                    send()
                }}
            >Отпрвить</button>
        </form>
    )
}
