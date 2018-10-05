/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
/****************
 * From project *
 ****************/
import dataReducer from './data/reducer';

export default combineReducers({
  dataReducer,
});
