import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';

// Hokks
import useRoles from 'hooks/useRoles';

const getAccessTokenFromLocalStorage = () => {
    return localStorage.getItem('access_token');
};

const getRefreshTokenFromLocalStorage = () => {
    return localStorage.getItem('refresh_token');
};

const removeTokensFromLocalStorage = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
};

export const UserContext = createContext({});

const UserProvider = (props) => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('refresh_token'));
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    const { getDataMenu } = useRoles();

    const saveTokensToLocalStorage = (type, token) => {
        if (type === 'access_token') {
            localStorage.setItem(type, token);
            setAccessToken(token);
        }
        if (type === 'refresh_token') {
            localStorage.setItem(type, token);
            setRefreshToken(token);
        }
    };

    const login = async (data) => {
        console.log('data', data);
        await axios({
            url: '/login',
            baseURL: 'http://localhost:5000',
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: data
        })
            .then((res) => {
                const _accessToken = res.data.accessToken;
                const _refreshToken = res.data.refreshToken;

                saveTokensToLocalStorage('access_token', _accessToken);
                saveTokensToLocalStorage('refresh_token', _refreshToken);
                setIsAuth(true);

                navigate('/');
                // Get Data Menu
                getDataMenu();
            })
            .catch((err) => {
                console.log('err', err);
                throw Error(err);
            });
    };

    const checkExpiration = () => {
        console.log('expiration running');
        const _accessToken = getAccessTokenFromLocalStorage();
        const _refreshToken = getRefreshTokenFromLocalStorage();

        if (_refreshToken && _accessToken) {
            const isRefreshTokenExpired = isExpired(_refreshToken);
            const isAccessTokenExpired = isExpired(_accessToken);

            if (isRefreshTokenExpired) {
                console.log('user has been logout');
                logout();
            } else {
                setIsAuth(true);
            }
        } else {
            logout();
        }
    };

    const checkAuth = () => {};

    const logout = () => {
        removeTokensFromLocalStorage();

        setAccessToken(null);
        setRefreshToken(null);
        setIsAuth(false);
    };

    return (
        <UserContext.Provider
            value={{
                isAuth,
                accessToken,
                refreshToken,
                login,
                logout,
                checkExpiration
            }}
            {...props}
        />
    );
};

export default UserProvider;
