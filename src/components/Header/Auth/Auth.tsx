import { useState } from 'react';
import UserNav from './UserNav';
import AuthNav from './AuthNav';

const Auth = () => {
    const [isLogged] = useState(false);

    return <>{isLogged ? <UserNav /> : <AuthNav />}</>;
};

export default Auth;
