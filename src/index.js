import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// custom router
import CustomRouter from 'routes/CustomRouter/index';
import history from 'routes/CustomRouter/history';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';
import MultiProvider from 'configs/MultiProvider';
import UserProvider from 'contexts/UserContext';
import { RolesProvider } from 'contexts/rolesContext';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StrictMode>
        {/* <CustomRouter basename="/admin-sedap" history={history}> */}
        <ReduxProvider store={store}>
            <BrowserRouter basename="/admin-sedap">
                <MultiProvider providers={[<UserProvider />, <RolesProvider />]}>
                    <App />
                </MultiProvider>
            </BrowserRouter>
        </ReduxProvider>
        {/* </CustomRouter> */}
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
