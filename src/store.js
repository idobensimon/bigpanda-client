import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';

import comments from './reducers/comments';
import loading from './reducers/loading';
const reducer = combineReducers({comments,loading});

let middleWare = [promiseMiddleware(),createLogger()];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

let store = createStoreWithMiddleware(reducer);

export default store;
