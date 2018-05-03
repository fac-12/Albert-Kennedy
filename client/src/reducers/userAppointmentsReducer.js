import { USER_APTS, CLEAR_PROFILE_STATE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CLEAR_PROFILE_STATE:
      return { ...state, apts: null };
    case USER_APTS:
      return { ...state, apts: action.payload };
    default:
      return state;
  }
};
