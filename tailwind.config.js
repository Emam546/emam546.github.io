/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    50: "#434343",
                    100: "#393939",
                    200: "#2f2f2f",
                    300: "#252525",
                    400: "#1b1b1b",
                    500: "#111111",
                    600: "#070707",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                },
            },
        },
    },
    prefix:"tw-",
    plugins: [],
};
