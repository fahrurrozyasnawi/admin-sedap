import { Navigate } from 'react-router-dom';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';
import MinimalLayout from 'layout/MinimalLayout/index';
import { lazy } from 'react';

// Pages
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// Authentication
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));

const routes = (isAuthenticated) => [
    {
        path: '/',
        element: isAuthenticated ? <MainLayout /> : <Navigate to="/login" />,
        children: [
            {
                path: '/',
                element: <Navigate to="app/dashboard" />
            }
        ]
    },
    {
        path: '/',
        element: !isAuthenticated ? <MinimalLayout /> : <Navigate to="/app/dashboard" />,
        children: [
            {
                path: 'login',
                element: <AuthLogin />
            }
        ]
    }
];

export default routes;
