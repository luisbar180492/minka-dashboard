/***********************
 * Node modules import *
 ***********************/
import { combineReducers } from 'redux';
/******************
 * Project import *
 ******************/
import useCaseReducer from './useCase/reducer';

export default combineReducers({
  useCaseReducer,
});