import React, { Component } from "react";

import {
  Container,
  Card,
  Subtitle,
  DesktopButton,
  H2
} from "../styling/components";

export default class Age extends Component {
  render() {
    return (
      <Container>
        <Card>
          <H2>inter-AKT</H2>
          <Subtitle>Great! Are you aged between 13 and 25?</Subtitle>
          <DesktopButton text="yes" url="/lgbt" primary />
          <DesktopButton text="no" url="/ageredirect" />
        </Card>
      </Container>
    );
  }
}
