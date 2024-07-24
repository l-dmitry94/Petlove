import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default SharedLayout;
