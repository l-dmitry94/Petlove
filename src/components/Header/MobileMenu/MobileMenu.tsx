import { FC } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import navigationItems from '../navigation.json';
import Navigation from '../Navigation';
import Auth from '../Auth';

interface IMobileMenu {
    menuIsOpen: boolean;
    closeMenu: () => void;
}

const MobileMenu: FC<IMobileMenu> = ({ menuIsOpen, closeMenu }) => {
    return (
        <Drawer
            open={menuIsOpen}
            onClose={closeMenu}
            anchor="right"
            variant="persistent"
        >
            <Box
                component="div"
                width={218}
                height="100%"
                justifyContent="space-between"
                sx={{ position: 'relative' }}
            >
                <IconButton
                    onClick={closeMenu}
                    color="inherit"
                    sx={{
                        position: 'absolute',
                        top: '20px',
                        right: '12px',
                    }}
                >
                    <CloseRoundedIcon sx={{ width: 32, height: 32 }} />
                </IconButton>
                <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                    padding="150px 20px 40px"
                >
                    <Navigation items={navigationItems} />
                    <Auth />
                </Box>
            </Box>
        </Drawer>
    );
};

export default MobileMenu;
