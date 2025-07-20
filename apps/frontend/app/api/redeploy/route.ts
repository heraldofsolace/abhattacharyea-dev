export async function POST(request: Request) {
    const TOKEN = process.env.RAILWAY_TOKEN || '';
    const ENVIRONMENT_ID = "1e09876d-cf88-4f98-9faa-7a12aa8da87a"
    const SERVICE_ID = "89ca591d-037b-42c1-8a88-00be009809c5"
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

    const resp = await fetch('https://backboard.railway.com/graphql/v2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Project-Access-Token': TOKEN,
            'authorization': `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify({
            query: `
            mutation ServiceInstanceRedeploy {
                serviceInstanceRedeploy(
                    environmentId: "${ENVIRONMENT_ID}"
                    serviceId: "${SERVICE_ID}"
                )
            }`
        }),
    })

    const data = await resp.json()

    if (data.errors) {
        console.error(data.errors)
        return Response.json({ success: false })
    }

    console.log(data)
    return Response.json({success: true})
}
