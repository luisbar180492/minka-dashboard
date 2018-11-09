/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
/****************
 * From project *
 ****************/
import signInReducer from './signIn/reducer';
import signOutReducer from './signOut/reducer';

export default combineReducers({
  signInReducer,
  signOutReducer,
});
