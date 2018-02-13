import { USER_APTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_APTS:
      return { ...state, apts: action.payload };
    default:
      return state;
  }
};
