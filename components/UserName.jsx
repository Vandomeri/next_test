'use client'

import React, { useState, useEffect } from 'react'

export default function UserName({ name }) {
    const [Username, setUsername] = useState(name)


    useEffect(() => {
        console.log('Edited');
    }, [Username])



    return (
        <div>
            <input
                className="text-black"
                type="text"
                value={Username}
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
        </div>
    )
}
