import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import store from './redux/Store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('my-app'));