'use client'

export default function FileForm() {
    async function handleSubmit(e) {
        e.preventDefault()
        const resp = await fetch('/api/fileUpload', {
            method: 'POST',
            body: new FormData(e.target)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="file" id="" />
            <button>Отправить</button>
        </form>
    )
}
