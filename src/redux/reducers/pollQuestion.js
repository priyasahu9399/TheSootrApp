import {GET_POLL_QUESTION} from '../types';
const initialState = {
  getpollquestion: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POLL_QUESTION:
      return {
        ...state,
        getpollquestion: action.payload,
      };

    default:
      return state;
  }
};
