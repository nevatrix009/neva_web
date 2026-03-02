export async function POST(req) {
    const formData = await req.formData();
    const body = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
        body.append(key, value);
    }

    body.append("form-name", "instant-quote");

    await fetch(process.env.URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
    });

    return new Response("OK", { status: 200 });
}