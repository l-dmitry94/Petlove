import Container from 'components/Container';
import AuthImage, { Pet } from 'components/AuthImage';
import AuthForm from 'components/AuthForm';
import fields from './loginData.json';
import validationSchema from './validationSchema';
import scss from './Login.module.scss';
import Input from 'components/Input';

const Login = () => {
    return (
        <section className={scss.login}>
            <Container>
                <div className={scss.loginWrapper}>
                    <AuthImage pet={Pet.Dog} />

                    <AuthForm
                        title="Log in"
                        description="Welcome! Please enter your credentials to login to the platform:"
                        formType="login"
                        validationSchema={validationSchema}
                    >
                        {(register, errors, dirtyFields) => (
                            <>
                                <div className={scss.formWrapper}>
                                    {fields.map(
                                        ({ name, type, placeholder }) => (
                                            <Input
                                                key={name}
                                                type={type}
                                                register={register}
                                                name={name}
                                                placeholder={placeholder}
                                                error={errors[name]?.message}
                                                dirtyFields={dirtyFields[name]}
                                            />
                                        )
                                    )}
                                </div>
                            </>
                        )}
                    </AuthForm>
                </div>
            </Container>
        </section>
    );
};

export default Login;
