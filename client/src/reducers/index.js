import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import appointmentReducer from "./appointmentReducer";

export default combineReducers({
  form: formReducer,
  newApt: appointmentReducer
});
