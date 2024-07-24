import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigation } from './Navigation.types';
import scss from './Navigation.module.scss';

const Navigation: FC<INavigation> = ({ items, closeMenu }) => {
    return (
        <ul className={scss.navigationList}>
            {items.map(({ label, href }) => (
                <li key={label} onClick={closeMenu}>
                    <NavLink to={href} className={scss.navigationItem}>
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
