import { TOPICS, MENTOR, AVAILIBILTY, APT_TIME, MENTORLIST } from "./types";
import history from "../history";
import axios from "axios";

export const updateTopics = values => {
  history.push("/mentors");
  return {
    type: TOPICS,
    payload: values
  };
};

export const updateMentor = value => {
  history.push("/schedule");
  return {
    type: MENTOR,
    payload: value.mentor
  };
};

export const fetchAvailibilites = mentor => {
  return dispatch => {
    axios.get(`/getavailabilities?mentor=${mentor}`).then(res => {
      dispatch({
        type: AVAILIBILTY,
        payload: res.data
      });
    });
  };
};

export const fetchMentors = () => {
  return dispatch => {
    axios
      .get("/getmentordata")
      .then(res => {
        dispatch({
          type: MENTORLIST,
          payload: res.data
        });
      })
      .catch(error => console.log(error));
  };
};

export const updateAptTime = (value, loggedin, newApt) => {
  localStorage.setItem("endOfFlow", "finished");

  if (loggedin) {
    const scheduledAppt = {
      mentor: newApt.mentor,
      date_and_time: value.datetime,
      topics: newApt.topics
    };

    axios
      .post("/addappt", {
        scheduledAppt,
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(res => {
        localStorage.removeItem("endOfFlow");
        history.push("/success");
      })
      .catch(err => console.log(err));
  } else {
    history.push("/register");
  }
  return {
    type: APT_TIME,
    payload: value
  };
};
