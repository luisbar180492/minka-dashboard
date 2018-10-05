/********************
 * From third party *
 ********************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//To pass store to their children
import { ConnectedRouter } from 'react-router-redux';//To link the history with state
/****************
 * From project *
 ****************/
import './theme/hpe/index.scss';
import App from './view/main/index';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
