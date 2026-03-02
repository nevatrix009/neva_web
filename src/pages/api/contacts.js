export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const data = req.body;

        const GOOGLE_SCRIPT_URL =
            "https://script.google.com/macros/s/AKfycby-i9hFnR0defPhsi8Hsx4-T_rccaGOCAzP0BU_vIZ8mnO1B8PCvPCK5kjDx1Z0zoeN/exec";

        // Convert to form data (Google requires this)
        const formBody = new URLSearchParams({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            service: data.service || "",
            country: data.country || "",
            message: data.message || "",
        });

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: formBody,
            redirect: "follow",
        });

        const text = await response.text();
        console.log("Google response:", text);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("SERVER ERROR:", error);
        return res.status(500).json({ success: false });
    }
}