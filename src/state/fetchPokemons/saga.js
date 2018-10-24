/********************
 * From third party *
 ********************/
import { apply, put, takeEvery } from 'redux-saga/effects'
/****************
 * From project *
 ****************/
import actionBuilder from '../../common/actionBuilder';
import { requester } from '../../service/';
import { POKEMON_URI  } from '../../config';
import {
  FETCH_POKEMONS,
  WILL_FETCH_POKEMONS,
  FETCHING_POKEMONS,
  DID_FETCH_POKEMONS,
} from '../../common/actions';

function* fetchPokemons() {
  try {

    yield put(actionBuilder(WILL_FETCH_POKEMONS));
    const response = yield apply(requester, requester.get, [POKEMON_URI]);
    yield put(actionBuilder(FETCHING_POKEMONS, response, false));

  } catch (error) {
    yield put(actionBuilder(FETCHING_POKEMONS, error, true));
  }

  yield put(actionBuilder(DID_FETCH_POKEMONS));
}

function* saga() {
  yield takeEvery(FETCH_POKEMONS, fetchPokemons);
}

export default saga;
