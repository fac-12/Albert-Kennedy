import { APT_TOPICS, APT_MENTOR } from "./types";
import history from "../history";

export const updateTopics = values => {
  history.push("/mentors");
  return {
    type: APT_TOPICS,
    payload: values
  };
};

export const updateMentor = values => {
  return {
    type: APT_MENTOR,
    payload: values
  };
};
