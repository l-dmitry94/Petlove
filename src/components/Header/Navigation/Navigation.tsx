import { Box, Link, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface INavigationItem {
    label: string;
    href: string;
}

interface INavigation {
    items: INavigationItem[];
}

const Navigation: FC<INavigation> = ({ items }) => {
    const [isActive, setIsActive] = useState<number | null>(null);

    return (
        <Box component="nav" display="flex" justifyContent="center">
            <Stack spacing={1}>
                {items.map(({ label, href }, index) => (
                    <Link
                        component={NavLink}
                        to={href}
                        key={label}
                        width={119}
                        height={48}
                        alignItems="center"
                        color="text.primary"
                        border="1px solid rgba(38, 38, 38, 0.15)"
                        onClick={() => setIsActive(index)}
                        sx={{
                            borderColor:
                                index === isActive
                                    ? 'primary.main'
                                    : 'rgba(38, 38, 38, 0.15)',
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
