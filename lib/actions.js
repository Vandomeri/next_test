'use server'


export async function sendToTg(formData) {
    'use server'

    const msg = formData.get('msg')

    console.log('msg');
}