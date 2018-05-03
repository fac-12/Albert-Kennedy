import { USER_APTS, PROFILE_PAGE_UNLOADED } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case PROFILE_PAGE_UNLOADED:
      return state;
    case USER_APTS:
      return { ...state, apts: action.payload };
    default:
      return state;
  }
};
