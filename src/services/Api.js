import axios from 'axios';
import { isExpired } from 'react-jwt';
// import history from 'routes/CustomRouter/history';

let isRefreshing = false;
let refreshQueue = [];

const URL_API = 'http://localhost:5000';
const api = axios.create({ baseURL: URL_API, headers: {} });

const removeTokensFromLocalStorage = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
};

api.interceptors.request.use(
    async (config) => {
        // get token
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        // check if token exists
        if (refreshToken && accessToken) {
            const accessTokenIsExpired = isExpired(accessToken);
            const refreshTokenIsExpired = isExpired(refreshToken);

            // check refresh token expire
            if (refreshTokenIsExpired) {
                // const navigate = useNavigate();
                // navigate to login page
                removeTokensFromLocalStorage();
                console.log('To login page');
                window.location.href = '/admin-sedap/login';
                // history.replace('/admin-sedap/login');
                // window.location.reload();

                // throw new Error('Refresh Token Expired');
                return;
            } else {
                // check access token expire
                if (accessTokenIsExpired) {
                    // if access token has expired and we're not alredy refreshing
                    if (!isRefreshing) {
                        isRefreshing = true;
                        // send refresh token api
                        try {
                            const data = { refreshToken };
                            const refresh = await axios.post(`${URL_API}/refresh`, data);
                            const newAccesToken = refresh.data.accessToken;
                            const newRefreshToken = refresh.data.refreshToken;

                            // udpate tokens
                            localStorage.setItem('access_token', newAccesToken);
                            localStorage.setItem('refresh_token', newRefreshToken);

                            // Call all the requests that were waiting for the access token refresh
                            refreshQueue.forEach((cb) => cb(newAccesToken));
                            refreshQueue = [];
                            isRefreshing = false;
                            console.log('succes refresh token');
                        } catch (error) {
                            throw new Error('Failed to refresh token');
                        }
                    }

                    return new Promise((resolve) => {
                        refreshQueue.push((token) => {
                            config.headers.Authorization = `Bearer ${token}`;
                            resolve(config);
                        });
                    });
                }

                // If the access token has not expired, set the Authorization header
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
