import React from 'react';
import { useRoutes } from 'hookrouter';
import HomePage from 'components/Home';
import OffersPage from 'components/Offers';

const routes = {
    '/': () => <HomePage />,
    '/offers': () => <OffersPage />
};

export default function App() {
    const routeResult = useRoutes(routes);

    return routeResult || <h1>NOT FOUND</h1>;
}
