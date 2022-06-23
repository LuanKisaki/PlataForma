/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Roboto, sans-serif',
            },
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
                myblue: {
                    999: '#1c232e',
                    888: '#1e293b',
                    777: '#1d2d47',
                    666: '#1a3154',
                    555: '#133161',
                },
                blue: {
                    999: "#08415e",
                    888: "#086391",
                    777: "#0586c7",
                    666: "#66caff"
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