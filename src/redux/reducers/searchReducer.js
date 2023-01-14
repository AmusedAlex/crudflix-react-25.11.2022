import { GET_SEARCH_INPUT } from "../actions";

const initialState = {
  input: [],
  isTyped: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
