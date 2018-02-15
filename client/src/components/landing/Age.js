import React, { Component } from "react";
import LinkButton from "../LinkButton";
import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #DFDBE5;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), linear-gradient(180deg, #7C53A2 0%, rgba(124, 83, 162, 0) 100%);

  > p {
    height: fit-content;
    align-self: center;
    font-size: 1.2rem;
    margin-bottom: 5vh;
  }
`;

export default class Age extends Component {
  render() {
    return (
      <Container>
        <p>Are you aged between 13 and 25?</p>
        <LinkButton text="yes" url="/lgbt" primary />
        <LinkButton text="no" url="/ageredirect" />
      </Container>
    );
  }
}
