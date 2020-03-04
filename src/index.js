import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';

import getStore from 'state/store';

render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
