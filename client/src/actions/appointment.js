import { APT_TOPICS } from "./types";

export const updateTopics = values => {
  return {
    type: APT_TOPICS,
    payload: values
  };
};
