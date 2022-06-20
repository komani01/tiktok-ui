import { HeaderOnly } from '~/Layouts';

import config from '~/Config';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';
//Public Routes
const publicRoutes = [
    { path: config.routes.home, Component: Home },
    { path: config.routes.following, Component: Following },
    { path: config.routes.live, Component: Live },
    { path: config.routes.profile, Component: Profile },
    { path: config.routes.upload, Component: Upload, layout: HeaderOnly },
    { path: config.routes.search, Component: Search, layout: null },
];
//Private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
