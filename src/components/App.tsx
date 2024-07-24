import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import NewsPage from 'pages/NewsPage';
import FindPetPage from 'pages/FindPetPage';
import FriendsPage from 'pages/FriendsPage';
import AuthPage from 'pages/AuthPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="notices" element={<FindPetPage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="friends " element={<FriendsPage />} />
                <Route path=":id" element={<AuthPage />} />
            </Route>
        </Routes>
    );
};

export default App;
