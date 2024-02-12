'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export default function EditablField({ name, value, api, id }) {
    const [isInput, setIsInput] = useState(false)
    const [input, setInput] = useState(value)


    async function handleClick() {
        if (isInput) {
            const res = await fetch(api, {
                method: 'POST',
                body: JSON.stringify({
                    data: input,
                    id: id
                })
            })
        }
        setIsInput(prev => !prev)
    }

    function handleChange(e) {
        setInput(e.target.value)

    }

    return (
        <div className="flex gap-x-3 items-center w-1/3 justify-between">
            {
                !isInput ?
                    (<p>{name}: {input}</p>) :
                    (<Input
                        value={input}
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    />)
            }

            <Button
                onClick={handleClick}
            >
                {!isInput ? '✎' : '✓'}
            </Button>
        </div>
    )
}
