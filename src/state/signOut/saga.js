/********************
 * From third party *
 ********************/
import { put, takeEvery } from 'redux-saga/effects'
import { sessionService } from 'redux-react-session';
/****************
 * From project *
 ****************/
import actionBuilder from 'common/actionBuilder';
import { SIGN_OUT, WILL_SIGN_OUT, SIGNING_OUT, DID_SIGN_OUT } from '../../common/actions';

function* signOut({ payload }) {
  try {

    yield put(actionBuilder(WILL_SIGN_OUT));
    yield sessionService.deleteSession();
    yield put(actionBuilder(SIGNING_OUT, {}, false));
  } catch (error) {

    yield put(actionBuilder(SIGNING_OUT, error, true));
  }

  yield put(actionBuilder(DID_SIGN_OUT));
}

function* signOutSaga() {
  yield takeEvery(SIGN_OUT, signOut);
}

export default signOutSaga;
