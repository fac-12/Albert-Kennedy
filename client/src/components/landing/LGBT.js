import React, { Component } from "react";
import lgbtImage from "../../assets/images/raw/lgbt-flag.jpg"

import {Container,
Mask,
DesktopBg,
Card,
Img,
Subtitle,
DesktopButton,
H2} from "../styling/onboardingpages";

export default class LGBT extends Component {
  render() {
    return (
      <Container>
        <Img src={lgbtImage}/>
        <DesktopBg>
          <Card>
            <H2>inter-AKT</H2>
            <Subtitle><p>Do you identify as part of the LGBT+ community?</p></Subtitle>
            <DesktopButton text="yes" url="/topics" primary />
            <DesktopButton text="no" url="/lgbtredirect" />
          </Card>
        </DesktopBg>
        <Mask />
      </Container>
    );
  }
}
