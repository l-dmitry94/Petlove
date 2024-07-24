import { useEffect, useState } from 'react';
import Container, { ContainerStyle } from 'components/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import BurgerButton from './BurgerButton';
import MobileMenu from './MobileMenu';
import { useMedia } from 'hooks/useMedia';
import navigationItems from './navigation.json';
import scss from './Header.module.scss';
import Auth from './Auth';

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const { isMobile, isDesktop } = useMedia();

    useEffect(() => {
        if (isDesktop) {
            setMenuIsOpen(false);
        }
    }, [isDesktop]);

    return (
        <>
            <header className={scss.header}>
                <Container style={ContainerStyle.Fluid}>
                    <div className={scss.headerWrapper}>
                        <Logo />
                        {isDesktop && <Navigation items={navigationItems} />}
                        <div className={scss.headerRight}>
                            {!isMobile && <Auth />}
                            {!isDesktop && (
                                <BurgerButton
                                    onClick={() => setMenuIsOpen(true)}
                                />
                            )}
                        </div>
                    </div>
                </Container>
            </header>

            {!isDesktop && (
                <MobileMenu
                    menuIsOpen={menuIsOpen}
                    closeMenu={() => setMenuIsOpen(false)}
                />
            )}
        </>
    );
};

export default Header;
