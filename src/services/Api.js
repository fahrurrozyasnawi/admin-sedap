import axios from 'axios';
import { isExpired } from 'react-jwt';
import history from 'routes/CustomRouter/history';

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
                return history.replace('/admin-sedap/login');

                // throw error agar tidak melakukan request ke api
                throw new Error('Refresh Token Expired');
            } else {
                // check access token expire
                if (accessTokenIsExpired) {
                    // send refresh token api
                    try {
                        const data = { refreshToken };
                        const refresh = await axios.post(`${URL_API}/refresh`, data);
                        const newAccesToken = refresh.data.accessToken;
                        const newRefreshToken = refresh.data.refreshToken;

                        // udpate tokens
                        localStorage.setItem('access_token', newAccesToken);
                        localStorage.setItem('refresh_token', newRefreshToken);

                        console.log('succes refresh token');
                    } catch (error) {
                        throw new Error('Failed to refresh token');
                    }
                }
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
