/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                christmas: {
                    red: '#D42426',
                    green: '#165B33',
                    gold: '#F8B229',
                    cream: '#F0EAD6',
                }
            },
        },
    },
    plugins: [],
};
