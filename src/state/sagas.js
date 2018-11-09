/********************
 * From third party *
 ********************/
import { all } from 'redux-saga/effects';
/****************
 * From project *
 ****************/
import signInSaga from './signIn/saga';

export default function* root() {
  yield all([
    signInSaga()
  ]);
};
