import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ButtonStyles, IButton } from './Button.types';
import scss from './Button.module.scss';

const Button: FC<IButton> = ({ styleType, href, children, ...rest }) => {
    return (
        <>
            {href ? (
                <Link
                    to={href}
                    className={clsx(
                        scss.button,
                        styleType === ButtonStyles.Primary &&
                            scss.buttonPrimary,
                        styleType === ButtonStyles.Secondary &&
                            scss.buttonSecondary
                    )}
                >
                    {children}
                </Link>
            ) : (
                <button
                    {...rest}
                    className={clsx(
                        scss.button,
                        styleType === ButtonStyles.Primary &&
                            scss.buttonPrimary,
                        styleType === ButtonStyles.Secondary &&
                            scss.buttonSecondary
                    )}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
