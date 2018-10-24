/********************
 * From third party *
 ********************/
import { all } from 'redux-saga/effects';
/****************
 * From project *
 ****************/
import fetchPokemons from './fetchPokemons/saga';

export default function* root() {
  yield all([
    fetchPokemons()
  ]);
};
