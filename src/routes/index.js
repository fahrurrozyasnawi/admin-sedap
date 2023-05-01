import { UserContext } from 'contexts/UserContext';
import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
// import LoginRoutes from './LoginRoutes';
// import MainRoutes from './MainRoutes';

import routes from './Routes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    // return useRoutes([MainRoutes, LoginRoutes]);
    const { isAuth: isAuthenticated } = useContext(UserContext);

    const routing = useRoutes(routes(isAuthenticated));
    return <>{routing}</>;
}
