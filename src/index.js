import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import * as serviceWorker from './serviceWorker';
import {socketIO,inputFields,loginAPI,uploadAPI,app} from './redux/reducers.js'

const logger = createLogger();

const rootReducer = combineReducers({socketIO,inputFields,loginAPI,uploadAPI,app})
const store = createStore(rootReducer,{
  loginAPI:{token:localStorage.getItem('token')}  // initial state
},applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(<Provider store = {store}>  <App />  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
