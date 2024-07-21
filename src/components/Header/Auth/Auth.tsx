import { useState } from 'react';
import UserNav from './UserNav';
import AuthNav from './AuthNav';

const Auth = () => {
    const [isLogged] = useState<boolean>(false);
    return <>{isLogged ? <UserNav /> : <AuthNav />}</>;
};

export default Auth;
