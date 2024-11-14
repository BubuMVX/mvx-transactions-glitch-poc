import { RouteType } from '@multiversx/sdk-dapp/types';
import { Home } from '../pages/Home/Home.tsx';
import { Login } from '../pages/Login/Login.tsx';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound.tsx';
import { RouteNamesEnum } from './routeNames.enum.tsx';

export const routes: RouteType[] = [
    {
        path: RouteNamesEnum.home,
        component: Home,
        authenticatedRoute: true,
    },
    {
        path: RouteNamesEnum.login,
        component: Login,
    },
    {
        path: RouteNamesEnum.notFound,
        component: PageNotFound,
    },
];
