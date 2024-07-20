import { ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        desktop: true;
    }
}

export { ThemeOptions };
