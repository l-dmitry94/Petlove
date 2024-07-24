import { FC } from 'react';
import { Drawer } from '@mui/material';
import Auth from '../Auth';
import Navigation from '../Navigation';
import navigationItems from '../navigation.json';
import { IMobileMenu } from './MobileMenu.types';
import { icons } from 'assets/icons';
import scss from './MobileMenu.module.scss';

const MobileMenu: FC<IMobileMenu> = ({ menuIsOpen, closeMenu }) => {
    return (
        <Drawer
            open={menuIsOpen}
            onClose={closeMenu}
            anchor="right"
            variant="persistent"
        >
            <div className={scss.menu}>
                <button
                    type="button"
                    onClick={closeMenu}
                    className={scss.closeButton}
                >
                    <svg className={scss.closeIcon}>
                        <use href={`${icons}#icon-close`}></use>
                    </svg>
                </button>
                <div className={scss.menuContent}>
                    <Navigation items={navigationItems} closeMenu={closeMenu} />
                    <Auth />
                </div>
            </div>
        </Drawer>
    );
};

export default MobileMenu;
