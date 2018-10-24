/****************
 * From project *
 ****************/
import {
  WILL_FETCH_POKEMONS,
  FETCHING_POKEMONS,
  DID_FETCH_POKEMONS,
} from '../../common/actions';
/*************
 * Constants *
 *************/
const initialState = {
  data: 'Redux is ok!',
  pokemons: [],
  statusOfFetchingPokemons: {
    isFetching: false,
    wasAnError: false,
    error: {
      errorMessage: '',
    },
  },
};

export default function fetchPokemons(state = initialState, action) {

  switch (action.type) {

    case WILL_FETCH_POKEMONS:
      return Object.assign({}, state, {
        statusOfFetchingPokemons: {
          isFetching: true,
          wasAnError: false,
          error: {
            errorMessage: '',
          },
        },
      })

    case FETCHING_POKEMONS:
      if (action.error)
        return Object.assign({}, state, {
          statusOfFetchingPokemons: {
            isFetching: true,
            wasAnError: true,
            error: {
              errorMessage: action.payload.message,
            },
          },
        })

      return Object.assign({}, state, {
        pokemons: action.payload.results,
      })

    case DID_FETCH_POKEMONS:
      return Object.assign({}, state, {
        statusOfFetchingPokemons: {
          isFetching: false,
          wasAnError: false,
          error: {
            errorMessage: '',
          },
        },
      })

    default:
      return state;
  }
};
