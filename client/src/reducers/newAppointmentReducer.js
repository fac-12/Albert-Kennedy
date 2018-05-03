import {
  TOPICS,
  MENTOR,
  AVAILIBILTY,
  APT_TIME,
  CLEAR_AVAILABILITIES
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TOPICS:
      return { ...state, topics: action.payload };
    case MENTOR:
      return { ...state, mentor: action.payload };
    case AVAILIBILTY:
      return { ...state, availibility: action.payload };
    case APT_TIME:
      return { ...state, aptTime: action.payload };
    case CLEAR_AVAILABILITIES:
      return { ...state, availibility: null };
    default:
      return state;
  }
};
