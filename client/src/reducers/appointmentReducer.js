import { APT_TOPICS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case APT_TOPICS:
      console.log("state", { ...state, topics: action.payload });
      return { ...state, topics: [action.payload] };
    default:
      return state;
  }
};
