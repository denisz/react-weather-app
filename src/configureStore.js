import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga'
import createReducer from './configureReducers';
import asyncReducers from './reducers/sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history, injector) {
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(
        createReducer(),
        fromJS(initialState),
        compose(...enhancers),
    );

    // Extensions
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = asyncReducers.map((handle)=>sagaMiddleware.run(handle, injector)); // Saga registry

    return store;
}