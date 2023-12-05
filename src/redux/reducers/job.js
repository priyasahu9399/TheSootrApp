import {GET_JOBS} from '../types';
const initialState = {
  getjobs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        getjobs: action.payload,
      };

    default:
      return state;
  }
};
