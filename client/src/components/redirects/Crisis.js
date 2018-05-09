import React, { Component } from "react";
import styled from "styled-components";
import { Container, Card, RedirectP } from "../styling/components";

export default class Crisis extends Component {
  render() {
    return (
      <Container>
        <Card>
          <RedirectP>
            If you are in crisis, don’t use this site. Use one of these services
            instead.
          </RedirectP>
          <RedirectP>
            If you are having suicidal thoughts, call <a href="tel:999">999</a>{" "}
            or visit your nearest A&E department.
          </RedirectP>
          <RedirectP>
            You can also call Samaritans' 24-hour free helpline on
            <a href="tel:116123"> 116 123</a>
          </RedirectP>
          <RedirectP>
            National LGBT Domestic Violence Helpline:{" "}
            <a href="tel:0300 999 5428">0300 999 5428</a>
            {" or on "}
            <a href="tel:08009995428">0800 999 5428</a>
          </RedirectP>
          <RedirectP>
            LGBT SwitchBoard listen to all kinds of calls, and we take every one
            seriously: <a href="tel:03003300630">0300 330 0630</a>
          </RedirectP>
        </Card>
      </Container>
    );
  }
}
