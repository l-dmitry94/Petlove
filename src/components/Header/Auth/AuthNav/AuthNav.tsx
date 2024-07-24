import Button, { ButtonStyles } from 'components/Button';
import scss from './AuthNav.module.scss';

const AuthNav = () => {
    return (
        <div className={scss.buttonGroup}>
            <Button styleType={ButtonStyles.Primary} href="login">
                Log in
            </Button>
            <Button styleType={ButtonStyles.Secondary} href="register">
                Registration
            </Button>
        </div>
    );
};

export default AuthNav;
