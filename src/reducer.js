/***********************
 * Node modules import *
 ***********************/
import { combineReducers } from 'redux';
/******************
 * Project import *
 ******************/
import dataReducer from './data/reducer';

export default combineReducers({
  dataReducer,
});
