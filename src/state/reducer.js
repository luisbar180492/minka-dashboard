/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
/****************
 * From project *
 ****************/
import signInReducer from './signIn/reducer';

export default combineReducers({
  signInReducer,
});
