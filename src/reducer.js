/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
/****************
 * From project *
 ****************/
import stateReducer from './state/reducer';

export default combineReducers({
  stateReducer,
});
