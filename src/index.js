import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';

import getStore from 'state/store';

console.log('process.env', process.env);

render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
