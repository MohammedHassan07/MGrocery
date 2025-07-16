export async function GET(req) {

    try {

        await connectDb()

    } catch (error) {

        console.log(error)

        new Response(JSON.stringify({ message: '' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export async function POST(req) {

    try {

        await connectDb()

    } catch (error) {

        console.log(error)

        new Response(JSON.stringify({ message: '' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}