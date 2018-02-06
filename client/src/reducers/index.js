import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import appointmentReducer from "./appointmentReducer";
import mentorReducer from "./mentorReducer";

export default combineReducers({
  form: formReducer,
  newApt: appointmentReducer,
  mentors: mentorReducer
});
