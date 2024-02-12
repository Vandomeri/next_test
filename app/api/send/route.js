export async function POST(request) {
    const body = await request.json()
    const user_id = 250630566
    const token = '6924026059:AAGIjZEn_7QBM92ud79ELQs7IMjdJnkz1PY'
    const response = fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${user_id}&text=${body.data}`)
        .then((result) => result.json())
        .then((result) => result)
    // const response = await (await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${user_id}&text=${body.data}`)).json()
    console.log(response.ok);
    return new Response(JSON.stringify({
        'result': response.ok
    }))
}