import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button, { ButtonStyles } from 'components/Button';
import scss from './AuthForm.module.scss';

interface IRegistration {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface ILogin {
    email: string;
    password: string;
}

interface IAuthForm {
    title: string;
    description: string;
    formType: 'registration' | 'login';
    validationSchema: yup.ObjectSchema<any>;
    children: (
        register: UseFormRegister<any>,
        errors?: any,
        dirtyFields?: any
    ) => ReactNode;
}

const AuthForm: FC<IAuthForm> = ({
    title,
    description,
    formType,
    validationSchema,
    children,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<ILogin | IRegistration>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<ILogin | IRegistration> = (data) => {
        console.log(data);
    };

    return (
        <div className={scss.authForm}>
            <div className={scss.authInfo}>
                <h2 className={scss.title}>{title}</h2>
                <p className={scss.description}>{description}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children(register, errors, dirtyFields)}
                <Button styleType={ButtonStyles.Primary} type="submit">
                    {formType === 'registration' ? 'Registration' : 'Log in'}
                </Button>
                <p className={scss.label}>
                    {formType === 'registration'
                        ? 'Already have an account?'
                        : 'Don’t have an account?'}{' '}
                    <Link
                        to={
                            formType === 'registration' ? '/login' : '/register'
                        }
                        className={scss.link}
                    >
                        {formType === 'registration' ? 'Login' : 'Register'}
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default AuthForm;
