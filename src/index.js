import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'
//import {Provider} from 'react-redux'
import Provider from './root.js'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider >  <App />  </Provider>, document.getElementById('root'));


serviceWorker.unregister();
