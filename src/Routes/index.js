import { HeaderOnly } from '~/Components/Layout';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
//Public Routes
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/profile', Component: Profile },
    { path: '/upload', Component: Upload, layout: HeaderOnly },
    { path: '/search', Component: Search, layout: null },
];
//Private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
