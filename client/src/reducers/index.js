import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import newAppointmentReducer from "./newAppointmentReducer";
import mentorsReducer from "./mentorsReducer";

export default combineReducers({
  form: formReducer,
  newApt: newAppointmentReducer,
  mentors: mentorsReducer
});
