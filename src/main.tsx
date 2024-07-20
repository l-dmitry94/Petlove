import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from 'components/App';
import theme from 'constants/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter basename="/Petlove">
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
