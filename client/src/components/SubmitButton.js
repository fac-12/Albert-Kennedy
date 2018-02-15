import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: white;
  border: 2px solid #f47a20;
  border-radius: 5px;
  box-sizing: border-box;
  width: 90vw;
  height: 60px;
  font-size: 16px;
  margin: 5vw;
`;

const SubmitButton = props => {
  return <Button type="submit">{props.text}</Button>;
};

export default SubmitButton;
