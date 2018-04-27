import React, { Component } from "react";
import backgroundImage from "../../assets/images/raw/landing-background.jpg";

import {
  Container,
  Mask,
  DesktopBg,
  Card,
  Img,
  LogIn,
  StyledLink,
  Subtitle,
  DesktopButton,
  LinkButton,
  H2
} from "../styling/onboardingpages"

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Img src={backgroundImage}/>
        <DesktopBg>
          <Mask />
          <Card>
            <H2>inter-AKT</H2>
            <Subtitle>
              <p>A mentoring platform for young people in the LGBT+ community</p>
            </Subtitle>
            <DesktopButton text="get started" url="/age" primary />
            <LogIn>
              Returning user? <StyledLink to="/signin">Log in</StyledLink>
            </LogIn>
          </Card>
        </DesktopBg>
      </Container>
    );
  }
}
