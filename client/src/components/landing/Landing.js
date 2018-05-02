import React, { Component } from 'react';

import {
  Container,
  Card,
  LogIn,
  StyledLink,
  Subtitle,
  DesktopButton,
  H2
} from '../styling/onboardingpages';

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Card>
          <H2>inter-AKT</H2>
          <Subtitle>
            A mentoring platform for young people in the LGBT+ community
          </Subtitle>
          <DesktopButton text="get started" url="/age" primary />
          <LogIn>
            Returning user? <StyledLink to="/signin">Log in</StyledLink>
          </LogIn>
        </Card>
      </Container>
    );
  }
}
