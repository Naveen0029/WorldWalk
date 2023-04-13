import { createStore,applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import walkSaga from './walkSaga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(walkSaga);

export default store;