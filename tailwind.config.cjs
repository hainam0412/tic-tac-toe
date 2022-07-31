/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
