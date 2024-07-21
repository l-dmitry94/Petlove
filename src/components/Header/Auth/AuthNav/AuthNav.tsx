import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthNav = () => {
    return (
        <Stack spacing={1}>
            <Button
                variant="contained"
                component={Link}
                to="login"
                color="primary"
            >
                Log In
            </Button>
            <Button
                variant="contained"
                component={Link}
                to="register"
                color="secondary"
            >
                Registration
            </Button>
        </Stack>
    );
};

export default AuthNav;
