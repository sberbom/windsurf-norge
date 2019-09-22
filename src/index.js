import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { requestSpots, getAddress, changeRoute, activeSpot, changeUser } from './state/reducers'
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

// const logger= createLogger();
const rootReducer = combineReducers({requestSpots, getAddress, changeRoute, changeUser, activeSpot});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
