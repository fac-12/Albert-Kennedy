import { AUTH_USER, UNAUTH_USER, USER_INFO } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_INFO:
      return { ...state, user_info: action.payload };
    case AUTH_USER:
      return true;
    case UNAUTH_USER:
      return false;
    default:
      return state;
  }
};
