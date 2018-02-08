import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import newAppointmentReducer from "./newAppointmentReducer";
import mentorReducer from "./mentorReducer";

export default combineReducers({
  form: formReducer,
  newApt: newAppointmentReducer,
  mentors: mentorReducer
});
