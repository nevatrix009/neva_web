/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nevPink: "#E94BB8",
                nevOrange: "#F59E3D",
                nevBlue: "#2BB0E6",
                nevDark: "#0F172A",
            },
        },
    },
    plugins: [],
};
