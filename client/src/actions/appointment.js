import { TOPICS, MENTOR, AVAILIBILTY, APT_TIME } from "./types";
import history from "../history";

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

export const updateAptTime = value => {
  return {
    type: APT_TIME,
    payload: value
  };
};
