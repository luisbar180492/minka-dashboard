/********************
 * From third party *
 ********************/
import { put, takeEvery } from 'redux-saga/effects'
/****************
 * From project *
 ****************/
import actionBuilder from 'common/actionBuilder';
import { requester } from 'service/';
import { FETCHING_ACCOUNTS, WILL_FETCH_ACCOUNTS, FETCH_ACCOUNTS, DID_FETCH_ACCOUNTS } from '../../common/actions';

function* fetchAccounts({ payload }) {
  try {

    yield put(actionBuilder(WILL_FETCH_ACCOUNTS));
    const response = yield requester.fetchAccounts();
    yield put(actionBuilder(FETCHING_ACCOUNTS, response, false));
  } catch (error) {

    yield put(actionBuilder(FETCHING_ACCOUNTS, error, true));
  }

  yield put(actionBuilder(DID_FETCH_ACCOUNTS));
}

function* fetchAccountsSaga() {
  yield takeEvery(FETCH_ACCOUNTS, fetchAccounts);
}

export default fetchAccountsSaga;
