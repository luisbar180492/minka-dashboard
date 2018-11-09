/********************
 * From third party *
 ********************/
import { put, takeEvery } from 'redux-saga/effects'
/****************
 * From project *
 ****************/
import actionBuilder from 'common/actionBuilder';
import { requester } from 'service/';
import { FETCHING_ACTIONS, WILL_FETCH_ACTIONS, FETCH_ACTIONS, DID_FETCH_ACTIONS } from '../../common/actions';

function* fetchActions({ payload }) {
  try {

    yield put(actionBuilder(WILL_FETCH_ACTIONS));
    const response = yield requester.fetchActions();
    yield put(actionBuilder(FETCHING_ACTIONS, response, false));
  } catch (error) {

    yield put(actionBuilder(FETCHING_ACTIONS, error, true));
  }

  yield put(actionBuilder(DID_FETCH_ACTIONS));
}

function* fetchActionsSaga() {
  yield takeEvery(FETCH_ACTIONS, fetchActions);
}

export default fetchActionsSaga;
