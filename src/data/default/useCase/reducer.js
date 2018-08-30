/*************
 * Constants *
 *************/
const initialState = {
  data: 'Redux is ok!'
};

export default function useCase(state = initialState, action) {
  
  switch (action.type) {

    default:
      return state;
  }
};