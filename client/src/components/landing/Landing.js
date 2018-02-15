import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";
import styled from "styled-components";


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #DFDBE5;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;


export default class Landing extends Component {
  render() {
    return (
      <Container>
        <h1>inter-AKT</h1>
        <p>A mentoring platform for young people in the LGBT community</p>
        <LinkButton text="get started" url="/age" primary />
        <p>
          Returning user? <Link to="/signin">Log in</Link>
        </p>
      </Container>
    );
  }
}
