import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import App from 'components/App';
import 'styles/index.scss';

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
        text: {
            primary: '#262626',
        },
    },
    breakpoints: {
        values: {
            xs: 375,
            sm: 768,
            lg: 1280,
            md: 1600,
            xl: 1600,
        },
    },
    typography: {
        fontFamily: 'Manrope',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                
            `,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter basename="/Petlove">
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
