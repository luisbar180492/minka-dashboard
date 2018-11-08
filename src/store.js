/********************
 * From third party *
 ********************/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { sessionService } from 'redux-react-session';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
/****************
 * From project *
 ****************/
import rootReducer from './reducer';
import sagas from './state/sagas';

//Array for managing the locations, current locations and navigation
export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

//Array for adding middlewares to the store
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
];

//Array for adding enhancers to the store
const enhancers = [];

//To enable dev tools for development mode
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

//Creating the store
const store = createStore(
  combineReducers({
    rootReducer,
    routerReducer,
  }),
  composedEnhancers
);

sessionService.initSessionService(store);
sagaMiddleware.run(sagas);

export default store;
