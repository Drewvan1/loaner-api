import React from 'react';
import ReactDOM from 'react-dom';
// import reactRouter from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'  // helps with debugging with redux
import thunkMiddleware from 'redux-thunk'
import { reducer as form } from 'redux-form'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { searchVehicles, requestReservations, requestLoaners, requestUser } from './reducers'

import 'tachyons/css/tachyons.min.css'  // css library

const logger = createLogger()

// could combine reducers in reducers file and export to variable here...
const rootReducer = combineReducers({ searchVehicles, requestReservations, requestLoaners, requestUser, form})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))



ReactDOM.render(
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
                , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
