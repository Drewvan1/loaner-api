import React from 'react';
import ReactDOM from 'react-dom';
// import reactRouter from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { searchVehicles, requestReservations, requestLoaners } from './reducers'

import 'tachyons'

const logger = createLogger()

const rootReducer = combineReducers({ searchVehicles, requestReservations, requestLoaners})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))



ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
                , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();