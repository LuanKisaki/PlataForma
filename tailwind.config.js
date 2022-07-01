/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx'
    ],
    theme: {
        extend: {
            backgroundImage: {
                blur: 'url(/src/assets/bg_blur.png)',
                react: 'url(/src/assets/ReactJS_icon.svg)',
                // bReact: 'url(/src/assets/ReactJS_icon.svg), url(/src/assets/bg_blur.png)',
                image: 'url(/src/assets/home_image_01.png)'
            },
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
                    999: '#181b21',
                    888: '#1c232e',
                    777: '#1e293b',
                    666: '#1d2d47',
                    555: '#1a3154',
                    444: '#133161',
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