import React from "react";
import history from "../history";

const LinkButton = props => {
  return <button onClick={() => history.push(props.url)}>{props.text}</button>;
};

export default LinkButton;
