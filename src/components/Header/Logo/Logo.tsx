import { Link as RouterLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from '@mui/material';

const Logo = () => {
    return (
        <Link
            component={RouterLink}
            to="/"
            color="text.primary"
            alignItems="end"
            sx={{
                fontWeight: 700,
                fontSize: 20,
                lineHeight: 1,
                letterSpacing: '-0.04em',
            }}
        >
            pet
            <FavoriteIcon color="primary" sx={{ width: 17, height: 17 }} />
            ve
        </Link>
    );
};

export default Logo;
