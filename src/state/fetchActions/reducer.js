import {
  WILL_FETCH_ACTIONS,
  FETCHING_ACTIONS,
  DID_FETCH_ACTIONS,
} from '../../common/actions';

const initialState = {
  actions: [],
  status: {
    isRunning: false,
    wasAnError: false,
    wasASuccess: false,
    error: {
      errorMessage: '',
    },
  },
};

export default function fetchActionsReducer(state = initialState, action) {

  switch (action.type) {

    case WILL_FETCH_ACTIONS:
      return {
        ...state,
        status: {
          ...state.status,
          isRunning: true,
        }
      };

    case FETCHING_ACTIONS:
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
        actions: action.payload.actions,
        status: {
          ...state.status,
          wasASuccess: true,
        }
      };

    case DID_FETCH_ACTIONS:
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
