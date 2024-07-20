import { FC } from 'react';
import { Drawer, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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
            <IconButton onClick={closeMenu}>
                {menuIsOpen && <CloseRoundedIcon />}
            </IconButton>
        </Drawer>
    );
};

export default MobileMenu;
