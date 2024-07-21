import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Link, Stack } from '@mui/material';

interface INavigationItem {
    label: string;
    href: string;
}

interface INavigation {
    items: INavigationItem[];
}

const Navigation: FC<INavigation> = ({ items }) => {
    return (
        <Box component="nav" display="flex" justifyContent="center">
            <Stack spacing={1}>
                {items.map(({ label, href }) => (
                    <Link
                        component={NavLink}
                        to={href}
                        key={label}
                        width={119}
                        height={48}
                        alignItems="center"
                        color="text.primary"
                        border="1px solid rgba(38, 38, 38, 0.15)"
                        sx={{
                            '&.active': {
                                borderColor: 'primary.main',
                            },
                            '&:hover': {
                                borderColor: 'primary.main',
                                color: 'primary.main',
                            },
                        }}
                    >
                        {label}
                    </Link>
                ))}
            </Stack>
        </Box>
    );
};

export default Navigation;
