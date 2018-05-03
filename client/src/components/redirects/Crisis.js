import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "../styling/components";

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
          <a href="tel:0300 999 5428">0300 999 5428</a>
          {" or on "}
          <a href="tel:08009995428">0800 999 5428</a>
        </p>
        <p>
          LGBT SwitchBoard listen to all kinds of calls, and we take every one
          seriously: <a href="tel:03003300630">0300 330 0630</a>
        </p>
      </Container>
    );
  }
}
