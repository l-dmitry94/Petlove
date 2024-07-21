import { useState } from 'react';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    return (
        <>
            <AppBar
                position="static"
                sx={{ bgcolor: 'transparent', boxShadow: 'none' }}
            >
                <Container
                    sx={{ padding: { desktop: '0 64px' }, maxWidth: 1152 }}
                >
                    <Toolbar
                        component="div"
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Logo />
                        {!menuIsOpen && (
                            <IconButton
                                size="small"
                                onClick={() => setMenuIsOpen(true)}
                            >
                                <MenuRoundedIcon
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        fill: '#262626',
                                    }}
                                />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <MobileMenu
                menuIsOpen={menuIsOpen}
                closeMenu={() => setMenuIsOpen(false)}
            />
        </>
    );
};

export default Header;
