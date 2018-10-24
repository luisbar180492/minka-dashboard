/********************
 * From third party *
 ********************/
import { combineReducers } from 'redux';
/****************
 * From project *
 ****************/
import fetchPokemonsReducer from './fetchPokemons/reducer';

export default combineReducers({
  fetchPokemonsReducer,
});
