import React from "react";
import history from "../history";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "#f47a20" : "white")};
  border: 2px solid #f47a20;
  border-radius: 5px;
  box-sizing: border-box;
  width: 90vw;
  height: 60px;
  font-size: 16px;
  bottom: ${props => (props.primary ? "15vh" : "3vh")};
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const LinkButton = props => {
  return (
    <Button onClick={() => history.push(props.url)} {...props}>
      {props.text}
    </Button>
  );
};

export default LinkButton;
