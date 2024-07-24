import { Link } from 'react-router-dom';
import Container from 'components/Container';
import AuthImage, { Pet } from 'components/AuthImage';
import AuthForm from 'components/AuthForm';
import Input from 'components/Input';
import Button, { ButtonStyles } from 'components/Button';
import scss from './Registration.module.scss';

const Registration = () => {
    return (
        <section className={scss.registration}>
            <Container>
                <div className={scss.registrationWrapper}>
                    <AuthImage pet={Pet.Cat} />

                    <AuthForm
                        title="Registration"
                        description="Thank you for your interest in our platform."
                    >
                        {(register, errors) => (
                            <>
                                <div className={scss.formWrapper}>
                                    <Input
                                        type="text"
                                        register={register}
                                        name="name"
                                        error={errors.name?.message}
                                        placeholder="Name"
                                    />
                                    <Input
                                        type="text"
                                        register={register}
                                        name="email"
                                        error={errors.email?.message}
                                        placeholder="Email"
                                    />
                                    <Input
                                        type="password"
                                        register={register}
                                        name="password"
                                        error={errors.password?.message}
                                        placeholder="Password"
                                    />
                                    <Input
                                        type="password"
                                        register={register}
                                        name="confirmPassword"
                                        error={errors.confirmPassword?.message}
                                        placeholder="Confirm password"
                                    />
                                </div>
                                <Button styleType={ButtonStyles.Primary}>
                                    Registration
                                </Button>
                                <p className={scss.label}>
                                    Already have an account?{' '}
                                    <Link to="/login" className={scss.link}>
                                        Login
                                    </Link>
                                </p>
                            </>
                        )}
                    </AuthForm>
                </div>
            </Container>
        </section>
    );
};

export default Registration;
