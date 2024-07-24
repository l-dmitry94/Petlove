import { useParams } from 'react-router-dom';
import Login from 'components/Login';
import Registration from 'components/Registration';

const AuthPage = () => {
    const { id } = useParams();

    return <>{id === 'login' ? <Login /> : <Registration />}</>;
};

export default AuthPage;
