import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  min-height: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 5vw 0 5vw;
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(180deg, #7c53a2 0%, rgba(124, 83, 162, 0) 100%);
`;

export default class Crisis extends Component {
  render() {
    return (
      <Container>
        <h2>
          If you are in crisis, don’t use this site. Use one of these services
          instead.
        </h2>
        <p>
          If you are having suicidal thoughts, call <a href="tel:999">999</a> or
          visit your nearest A&E department.
        </p>
        <p>
          You can also call Samaritans' 24-hour free helpline on{" "}
          <a href="tel:116123">116 123</a>
        </p>
        <p>
          National LGBT Domestic Violence Helpline:{" "}
          <a href="tel:0300 999 5428">0300 999 5428</a>{" "}
          <a href="tel:08009995428">0800 999 5428</a>{" "}
        </p>
        <p>
          LGBT SwitchBoard listen to all kinds of calls, and we take every one
          seriously: <a href="tel:03003300630">0300 330 0630</a>
        </p>
      </Container>
    );
  }
}
