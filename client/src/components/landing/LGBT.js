import React, { Component } from "react";

import {Container,
Card,
Subtitle,
DesktopButton,
H2, BackgroundStyle} from "../styling/onboardingpages";

export default class LGBT extends Component {
  render() {
    return (
      <Container>

          <Card>
            <H2>inter-AKT</H2>
            <Subtitle><p>Do you identify as part of the LGBT+ community?</p></Subtitle>
            <DesktopButton text="yes" url="/topics" primary />
            <DesktopButton text="no" url="/lgbtredirect" />
          </Card>

      </Container>
    );
  }
}
