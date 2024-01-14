/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                darkBackground: 'var(--dark-background)',
                accent: 'var(--accent-color)',
                secondaryAccent: 'var(--secondary-accent)',
                darkPurple: 'var(--dark-purple)',
                lightBorder: 'var(--light-border)',
                heading: 'var(--heading)',
            },
            backgroundColor:{
                "primary": "var(--primary-color)",
                "profileBanner": "#FCFBFF",
                "gradient_one": "#FA4A6F",
                "gradient_two": "#532B79",
            },
            fontFamily: {
                lex: ['LexendDeca', 'sans-serif'],
            },
        }
    },
    plugins: [],
}
