/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
/****************
 * From project *
 ****************/
import useCaseReducer from './useCase/reducer';

export default combineReducers({
  useCaseReducer,
});