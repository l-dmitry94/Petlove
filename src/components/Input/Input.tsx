import { FC, useState } from 'react';
import clsx from 'clsx';
import { IInput } from './Input.types';
import { icons } from 'assets/icons';
import scss from './Input.module.scss';

const Input: FC<IInput> = ({
    register,
    name,
    type,
    error,
    dirtyFields,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            {type === 'password' ? (
                <div>
                    <div className={scss.wrapper}>
                        <input
                            {...rest}
                            type={showPassword ? 'text' : type}
                            {...register(name)}
                            className={clsx(
                                scss.input,
                                error
                                    ? scss.inputError
                                    : dirtyFields && scss.inputValid
                            )}
                        />

                        {!error && dirtyFields && (
                            <svg className={scss.successIcon}>
                                <use href={`${icons}#icon-check`}></use>
                            </svg>
                        )}

                        {error && (
                            <svg className={scss.errorIcon}>
                                <use href={`${icons}#icon-close`}></use>
                            </svg>
                        )}

                        {!error && !dirtyFields && (
                            <button
                                onClick={togglePassword}
                                type="button"
                                className={scss.passwordButton}
                            >
                                <svg className={scss.passwordIcon}>
                                    <use
                                        className={clsx('transition-opacity', {
                                            'opacity-0': showPassword,
                                            'opacity-100': !showPassword,
                                        })}
                                        href={`${icons}#icon-eye`}
                                    ></use>
                                    <use
                                        className={clsx('transition-opacity', {
                                            'opacity-100': showPassword,
                                            'opacity-0': !showPassword,
                                        })}
                                        href={`${icons}#icon-eye-off`}
                                    ></use>
                                </svg>
                            </button>
                        )}
                    </div>
                    {error && <p className={scss.error}>{error}</p>}
                </div>
            ) : (
                <div>
                    <div className={scss.wrapper}>
                        <input
                            {...rest}
                            type={type}
                            {...register(name)}
                            className={clsx(
                                scss.input,
                                error
                                    ? scss.inputError
                                    : dirtyFields && scss.inputValid
                            )}
                        />
                        {!error && dirtyFields && (
                            <svg className={scss.successIcon}>
                                <use href={`${icons}#icon-check`}></use>
                            </svg>
                        )}

                        {error && (
                            <svg className={scss.errorIcon}>
                                <use href={`${icons}#icon-close`}></use>
                            </svg>
                        )}
                    </div>

                    {error && <p className={scss.error}>{error}</p>}
                </div>
            )}
        </>
    );
};

export default Input;
