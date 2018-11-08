/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
/****************
 * From project *
 ****************/
import stateReducer from './state/reducer';

export default combineReducers({
  stateReducer,
  sessionReducer,
});
