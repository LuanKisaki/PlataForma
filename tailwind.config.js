/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx'
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    999: "#0d0b0d",
                    888: "#141214",
                    777: "#2d2c2f",
                    666: "#dedce3f",
                    555: "#bfbdc3",
                    444: "#83818c",
                    333: "#ffffff"
                },
                blue: {
                    999: "#08415e",
                    999: "#086391",
                    999: "#0586c7",
                    999: "#66caff"
                },
                orange: {
                    999: "#f0a453",
                    888: "#e55e61"
                }

            },
        },
    },
    plugins: [],
}