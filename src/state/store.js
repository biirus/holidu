import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from 'state/root-reducer.js';
import saga from 'state/root-saga.js';

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

export default (preloadedState = reducer()) => {
    const store = configureStore({
        reducer,
        devTools: devMode,
        middleware: [sagaMiddleware],
        preloadedState
    });
    sagaMiddleware.run(saga);
    return store;
};
