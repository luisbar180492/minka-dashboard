/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
/****************
 * From project *
 ****************/
import signInReducer from './signIn/reducer';
import signOutReducer from './signOut/reducer';
import fetchActionsReducer from './fetchActions/reducer';

export default combineReducers({
  signInReducer,
  signOutReducer,
  fetchActionsReducer,
});
