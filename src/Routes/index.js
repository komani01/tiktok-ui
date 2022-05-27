import { HeaderOnly } from '~/Components/Layout';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import routesConfig from '~/Config/Routes';
//Public Routes
const publicRoutes = [
    { path: routesConfig.home, Component: Home },
    { path: routesConfig.following, Component: Following },
    { path: routesConfig.profile, Component: Profile },
    { path: routesConfig.upload, Component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, Component: Search, layout: null },
];
//Private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
