import { createTheme } from '@mui/material';
import Manrope500Woff2 from '../assets/fonts/Manrope-Medium.woff2';
import Manrope500Woff from '../assets/fonts/Manrope-Medium.woff';
import Manrope500Ttf from '../assets/fonts/Manrope-Medium.ttf';
import Manrope700Woff2 from '../assets/fonts/Manrope-Bold.woff2';
import Manrope700Woff from '../assets/fonts/Manrope-Bold.woff';
import Manrope700Ttf from '../assets/fonts/Manrope-Bold.ttf';
import Manrope800Woff2 from '../assets/fonts/Manrope-ExtraBold.woff2';
import Manrope800Woff from '../assets/fonts/Manrope-ExtraBold.woff';
import Manrope800Ttf from '../assets/fonts/Manrope-ExtraBold.ttf';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f6b83d',
            dark: '#f9b020',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#fff4df',
            dark: '#fbe7c1',
            contrastText: '#f6b83d',
        },
        error: {
            main: '#ef2447',
        },
        success: {
            main: '#08aa83',
        },
        background: {
            default: '#f9f9f9',
        },
    },
    typography: {
        fontFamily: 'Manrope, sans-serif',
        h1: {
            fontSize: '3.125rem',
            fontWeight: 700,
            lineHeight: 0.96,
            letterSpacing: '-0.03em',
            color: '#ffffff',
        },
        h2: {
            fontSize: '1.75rem',
            lineHeight: 1,
            fontWeight: 700,
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#262626',
        },
    },
    breakpoints: {
        values: {
            mobile: 375,
            tablet: 768,
            desktop: 1280,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Manrope';
                src:
                    url(${Manrope500Woff2}) format('woff2'),
                    url(${Manrope500Woff}) format('woff'),
                    url(${Manrope500Ttf}) format('truetype');
                font-weight: 500;
            };
            @font-face {
                font-family: 'Manrope';
                src:
                    url(${Manrope700Woff2}) format('woff2'),
                    url(${Manrope700Woff}) format('woff'),
                    url(${Manrope700Ttf}) format('truetype');
                font-weight: 700;
            };
            @font-face {
                font-family: 'Manrope';
                src:
                    url(${Manrope800Woff2}) format('woff2'),
                    url(${Manrope800Woff}) format('woff'),
                    url(${Manrope800Ttf}) format('truetype');
                font-weight: 800;
            };

            
          `,
        },
    },
});

export default theme;
