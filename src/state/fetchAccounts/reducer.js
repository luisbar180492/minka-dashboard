import {
  WILL_FETCH_ACCOUNTS,
  FETCHING_ACCOUNTS,
  DID_FETCH_ACCOUNTS,
} from '../../common/actions';

const initialState = {
  accounts: [],
  status: {
    isRunning: false,
    wasAnError: false,
    wasASuccess: false,
    error: {
      errorMessage: '',
    },
  },
};

export default function fetchAccountsReducer(state = initialState, action) {

  switch (action.type) {

    case WILL_FETCH_ACCOUNTS:
      return {
        ...state,
        status: {
          ...state.status,
          isRunning: true,
        }
      };

    case FETCHING_ACCOUNTS:
      if (action.error)
        return {
          ...state,
          status: {
            ...state.status,
            wasAnError: true,
            error: {
              errorMessage: action.payload.message,
            },
          },
        };

      return {
        ...state,
        accounts: action.payload.accounts,
        status: {
          ...state.status,
          wasASuccess: true,
        }
      };

    case DID_FETCH_ACCOUNTS:
      return {
        ...state,
        status: {
          ...state.status,
          isRunning: false,
          wasAnError: false,
          wasASuccess: false,
        },
      };

    default:
      return state;
  }
};
