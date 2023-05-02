import { Navigate } from 'react-router-dom';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';
import MinimalLayout from 'layout/MinimalLayout/index';
import { lazy } from 'react';

// Pages
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// Authentication
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));

const routes = (isAuthenticated) => [
    {
        path: '/',
        element: isAuthenticated ? <MainLayout /> : <Navigate to="/login" />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard/default" />
            },
            {
                path: 'color',
                element: <Color />
            },
            {
                path: 'dashboard',
                children: [
                    {
                        path: 'default',
                        element: <DashboardDefault />
                    }
                ]
            },
            {
                path: 'sample-page',
                element: <SamplePage />
            },
            {
                path: 'shadow',
                element: <Shadow />
            },
            {
                path: 'typography',
                element: <Typography />
            }
        ]
    },
    {
        path: '/',
        element: !isAuthenticated ? <MinimalLayout /> : <Navigate to="/dashboard/default" />,
        children: [
            {
                path: 'login',
                element: <AuthLogin />
            }
        ]
    }
];

export default routes;
