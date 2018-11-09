import {
  WILL_SIGN_IN,
  SIGNING_IN,
  DID_SIGN_IN,
} from '../../common/actions';

const initialState = {
  status: {
    isRunning: false,
    wasAnError: false,
    wasASuccess: false,
    error: {
      errorMessage: '',
    },
  },
};

export default function signInReducer(state = initialState, action) {

  switch (action.type) {

    case WILL_SIGN_IN:
      return {
        ...state,
        status: {
          ...state.status,
          isRunning: true,
        }
      };

    case SIGNING_IN:
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
        status: {
          ...state.status,
          wasASuccess: true,
        }
      };

    case DID_SIGN_IN:
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
