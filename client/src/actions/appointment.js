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
  console.log(value);
  history.push("/schedule");
  return {
    type: MENTOR,
    payload: value
  };
};

export const fetchAvailibilites = mentor => {
  /* fetch data for specific mentor*/
  return {
    type: AVAILIBILTY,
    payload: ["1", "2", "3"] //dummy
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

export const updateAptTime = value => {
  return {
    type: APT_TIME,
    payload: value
  };
};
