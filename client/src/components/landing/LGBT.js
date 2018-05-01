import React, { Component } from "react";

import {
  Container,
  Card,
  Subtitle,
  DesktopButton,
  H2
} from "../styling/onboardingpages";

export default class LGBT extends Component {
  render() {
    return (
      <Container>
        <Card>
          <H2>inter-AKT</H2>
          <Subtitle>Do you identify as part of the LGBT+ community?</Subtitle>
          <DesktopButton text="yes" url="/topics" primary />
          <DesktopButton text="no" url="/lgbtredirect" />
        </Card>
      </Container>
    );
  }
}
