/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#f6b83d',
                    dark: '#f9b020',
                },
                secondary: {
                    DEFAULT: '#fff4df',
                    dark: '#fbe7c1',
                },
                black: '#262626',
                error: '#ef2447',
                success: '#08aa83',
                background: '#f9f9f9',
            },
            backgroundSize: {
                full: '100%',
            },
            fontFamily: {
                manrope: 'Manrope, sans-serif',
            },
            lineHeight: {
                tight: 1.29,
            },
            letterSpacing: {
                tight: '-0.02em',
            },
            borderRadius: {
                custom: '30px',
            },
            screens: {
                mobile: '375px',
                tablet: '768px',
                desktop: '1280px',
            },
        },
    },
    plugins: [],
};
