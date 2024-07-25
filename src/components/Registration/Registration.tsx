import Container from 'components/Container';
import AuthImage, { Pet } from 'components/AuthImage';
import AuthForm from 'components/AuthForm';
import Input from 'components/Input';
import fields from './registrationData.json';
import validationSchema from './validationSchema';
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
                        formType="registration"
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

export default Registration;
