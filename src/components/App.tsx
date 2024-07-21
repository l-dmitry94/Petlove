import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import NewsPage from 'pages/NewsPage';
import PetsPage from 'pages/PetsPage';
import FriendsPage from 'pages/FriendsPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="notices" element={<PetsPage />} />
                <Route path="friends" element={<FriendsPage />} />
            </Route>
        </Routes>
    );
};

export default App;
