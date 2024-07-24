import { Link } from 'react-router-dom';
import { icons } from 'assets/icons';
import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link to="/" className={scss.logo}>
            pet
            <svg className={scss.heartIcon}>
                <use href={`${icons}#icon-heart`}></use>
            </svg>
            ve
        </Link>
    );
};

export default Logo;
