import axios from "axios";
import history from "../history";
import {
  USER_INFO,
  AUTH_USER,
  UNAUTH_USER,
  DISPLAY_ERROR,
  RESET_ERROR
} from "./types";

export const authFormInfo = values => {
  history.push("/userinfoform");
  return {
    type: USER_INFO,
    payload: values
  };
};

export const registerUser = (values, newApt) => {
  if (localStorage.endOfFlow === "finished") {
    const scheduledAppt = {
      mentor: newApt.mentor,
      date_and_time: newApt.aptTime.datetime,
      topics: newApt.topics
    };

    return (dispatch, getState) => {
      const authFormInfoState = getState().auth.user_info;
      axios
        .post("/signup", { ...values, ...authFormInfoState })
        .then(response => {
          localStorage.setItem("token", response.data.token);
          dispatch({
            type: AUTH_USER
          });
        })
        .then(response => {
          axios.post("/addappt", {
            scheduledAppt,
            headers: { authorization: localStorage.getItem("token") }
          });
        })
        .then(() => {
          localStorage.removeItem("endOfFlow");
          history.push("/success");
        })
        .catch(error => {
          if (error.message.includes("422")) {
            dispatch(displayError(error.response.data.error));
          } else {
            dispatch(
              displayError(
                "There was an issue with our server. Please try again later"
              )
            );
          }
        });
    };
  } else {
    return dispatch => {
      axios
        .post("/signup", values)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          dispatch({
            type: AUTH_USER
          });
          history.push("/profile");
        })
        .catch(error => {
          if (error.message.includes("422")) {
            dispatch(displayError(error.response.data.error));
          } else {
            dispatch(
              displayError(
                "There was an issue with our server. Please try again later"
              )
            );
          }
        });
    };
  }
};

export const signinUser = values => {
  return dispatch => {
    axios
      .post("/signin", values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: AUTH_USER,
          USER_INFO
        });
        history.push("/profile");
      })
      .catch(error => {
        if (error.message.includes("401")) {
          dispatch(displayError("Email or password was incorrect"));
        } else {
          dispatch(
            displayError(
              "There was an issue with our server. Please try again later"
            )
          );
        }
      });
  };
};

export const displayError = error => {
  return {
    type: DISPLAY_ERROR,
    payload: error
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR
  };
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return {
    type: UNAUTH_USER
  };
};

export const getUser = () => {
  return dispatch => {
    axios
      .get("/getuser", {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(response => {
        dispatch({
          type: AUTH_USER
        });
      })
      .catch(err => {
        dispatch({
          type: UNAUTH_USER
        });
      });
  };
};

export const forgotPassword = (user) => {
  return dispatch => {
    axios
    .post("/forgotpassword", user)
    .then(response => {
      console.log(response)
      dispatch(displayError(response.data.message));
    })
    .catch(error => {
        dispatch(displayError(error.response.data.err));
    });
  }
} 