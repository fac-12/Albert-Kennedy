import { APT_TOPICS, APT_MENTOR } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case APT_TOPICS:
      return { ...state, topics: action.payload };
    case APT_MENTOR:
      return { ...state, mentor: action.payload };
    default:
      return state;
  }
};
