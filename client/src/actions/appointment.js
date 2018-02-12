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
  /* fetch data for specific mentor*/
  return dispatch => {
    axios
    .get(`/getavailabilities?mentor=${mentor}`)
    .then(res => {
      dispatch({
        type: AVAILIBILTY,
        payload: res.data
      })
    })
  };
};

export const fetchMentors = () => {

  return dispatch => {
    axios
      .get("/getmentordata")
      .then(res => {
        console.log(res.data);
        dispatch({
          type: MENTORLIST,
          payload: res.data
        });
      })
      .catch(error => console.log(error));
  };
};

export const updateAptTime = value => {
  return {
    type: APT_TIME,
    payload: value
  };
};
