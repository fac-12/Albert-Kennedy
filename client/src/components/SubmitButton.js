import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: white;
  border: 2px solid #f47a20;
  border-radius: 5px;
  box-sizing: border-box;
  width: 80%;
  margin: 10vw;
  height: 60px;
  font-size: 16px;
  @media (min-width: 768px) {
    width: 50%;
    margin: 5vw;
  }
`;

const SubmitButton = props => {
  return <Button type="submit">{props.text}</Button>;
};

export default SubmitButton;
