import React from 'react';
import { useRoutes, useRedirect } from 'hookrouter';
import HomePage from 'components/Home';
import OffersPage from 'components/Offers';

const routes = {
    '/home': () => <HomePage />,
    '/offers': () => <OffersPage />
};

export default function App() {
    // not so conviniet =)
    useRedirect('/', '/home', { searchTerm: 'Munich, Germany' });

    return useRoutes(routes) || <h1>NOT FOUND</h1>;
}
