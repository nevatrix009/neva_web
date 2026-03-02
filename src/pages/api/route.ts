import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    // Allow only POST
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    try {

        // Send data to Google Sheet
        await fetch(
            "https://script.google.com/macros/s/AKfycbxeOlVrJi-EkKFO_mAv_AyNkhRknyS2bPvP-0JDDyZny00UBisqaQmaZeZRecSSWHrY/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(req.body),
            }
        );

        return res.status(200).json({ success: true });

    } catch (error) {
        return res.status(500).json({ success: false });
    }
}