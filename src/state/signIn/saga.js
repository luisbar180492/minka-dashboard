/********************
 * From third party *
 ********************/
import { apply, put, takeEvery } from 'redux-saga/effects'
import { sessionService } from 'redux-react-session';
/****************
 * From project *
 ****************/
import actionBuilder from 'common/actionBuilder';
import { requester, authentication } from 'service/';
import { SIGN_IN, WILL_SIGN_IN, SIGNING_IN, DID_SIGN_IN } from '../../common/actions';

function* signIn({ payload }) {
  try {

    yield put(actionBuilder(WILL_SIGN_IN));
    const response = yield authentication.signIn(payload.email, payload.password);
    yield sessionService.saveSession(response);
    yield put(actionBuilder(SIGNING_IN, response, false));
  } catch (error) {

    yield put(actionBuilder(SIGNING_IN, error, true));
  }

  yield put(actionBuilder(DID_SIGN_IN));
}

function* signInSaga() {
  yield takeEvery(SIGN_IN, signIn);
}

export default signInSaga;
