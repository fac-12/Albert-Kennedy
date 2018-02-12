import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import newAppointmentReducer from "./newAppointmentReducer";
import mentorsReducer from "./mentorsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  form: formReducer,
  newApt: newAppointmentReducer,
  mentors: mentorsReducer,
  auth: authReducer, 
  error: errorReducer
});
