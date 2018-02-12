import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: white;
  border: 2px solid #fb8b24;
  border-radius: 5px;
  width: 340px;
  height: 60px;
`;

const SubmitButton = props => {
  return <Button type="submit">{props.text}</Button>;
};

export default SubmitButton;
