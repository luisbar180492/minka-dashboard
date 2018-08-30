/***********************
 * Node modules import *
 ***********************/
import React from 'react';
import ReactDOM from 'react-dom';
/******************
 * Project import *
 ******************/
import './theme/hpe/index.scss';
import App from './view/main/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
