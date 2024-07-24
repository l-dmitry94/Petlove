import { FC } from 'react';
import { icons } from 'assets/icons';
import { IBurgerButton } from './BurgerButton.types';
import scss from './BurgerButton.module.scss';

const BurgerButton: FC<IBurgerButton> = ({ ...rest }) => {
    return (
        <button {...rest} type="button" className={scss.burgerButton}>
            <svg className={scss.burgerIcon}>
                <use href={`${icons}#icon-burger`}></use>
            </svg>
        </button>
    );
};

export default BurgerButton;
