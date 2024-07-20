import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from 'components/Header';

const SharedLayout = () => {
    return (
        <>
            <Header />

            <Box component="main">
                <Outlet />
            </Box>
        </>
    );
};

export default SharedLayout;
