import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Blog from './pages/Blog';
import Photos from './pages/Photos';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';
import './i18n';
import CouchCleaning from './pages/Services/CouchCleaning';
import CarCleaning from './pages/Services/CarCleaning';
import MattressCleaning from './pages/Services/MattressCleaning';
import UpholsteryCleaning from './pages/Services/UpholsteryCleaning';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'services/mattress-cleaning',
                element: <MattressCleaning />,
            },
            {
                path: 'services/upholstery-cleaning',
                element: <UpholsteryCleaning />,
            },
            {
                path: 'services/car-cleaning',
                element: <CarCleaning />,
            },
            {
                path: 'services/couch-cleaning',
                element: <CouchCleaning />,
            },
            // {
            //     path: 'services/leather-cleaning',
            //     element: <Services />,
            // },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/photos',
                element: <Photos />,
            },
            {
                path: '/prices',
                element: <Prices />,
            },
            {
                path: '/reviews',
                element: <Reviews />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
