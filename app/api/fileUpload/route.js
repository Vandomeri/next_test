import { writeFile } from 'fs/promises'
import { join } from 'path';

export async function POST(req) {
    const data = await req.formData()
    const file = data.get('file')
    console.log(file);

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = join('public', 'uploads', file.name)

    await writeFile(path, buffer)

    console.log(path);

    return Response.json({})
}