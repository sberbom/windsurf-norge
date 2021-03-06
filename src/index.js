import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { requestSpots, getAddress, activeSpot, changeUser, setToken } from './state/reducers'
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// const logger= createLogger();
const rootReducer = combineReducers({requestSpots, getAddress, changeUser, activeSpot, setToken});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
