import { FC, ReactNode } from 'react';
import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
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
    children: (register: UseFormRegister<any>, errors?: any) => ReactNode;
}

const AuthForm: FC<IAuthForm> = ({ title, description, children }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin | IRegistration>();

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
                {children(register, errors)}
            </form>
        </div>
    );
};

export default AuthForm;
