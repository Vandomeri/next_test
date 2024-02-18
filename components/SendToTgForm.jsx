'use client'

import { useState } from "react"
async function sendToTg(formData) {
    'use server'

    const msg = formData.get('msg')

    console.log('msg');
}

export default function SendToTgForm() {

    return (
        <form action={sendToTg}>
            <input name="msg" className="border p-4" type="text" />
            <button>Отправить</button>
        </form>
    )
}
