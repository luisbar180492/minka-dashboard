import {
  WILL_SIGN_OUT,
  SIGNING_OUT,
  DID_SIGN_OUT,
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

    case WILL_SIGN_OUT:
      return {
        ...state,
        status: {
          ...state.status,
          isRunning: true,
        }
      };

    case SIGNING_OUT:
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

    case DID_SIGN_OUT:
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
