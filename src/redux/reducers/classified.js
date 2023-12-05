import { GET_CLASSIFIED } from "./../types";
const initialState = {
   getclassified:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSIFIED:
      return {
        ...state,
        getclassified: action.payload,
      };

    default:
      return state;
  }
};
