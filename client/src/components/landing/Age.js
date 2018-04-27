import React, { Component } from "react";
import ageImage from "../../assets/images/raw/age-background.jpg"

import {Container,
Mask,
DesktopBg,
Card,
Img,
Subtitle,
DesktopButton,
H2} from "../styling/onboardingpages";



export default class Age extends Component {
  render() {
    return (
      <Container>
        <Img src={ageImage}/>
        <DesktopBg>
          <Mask />
        <Card>
          <H2>inter-AKT</H2>
          <Subtitle><p>Great! Just a couple more questions. Are you aged between 13 and 25?</p></Subtitle>
          <DesktopButton text="yes" url="/lgbt" primary />
          <DesktopButton text="no" url="/ageredirect" />
        </Card>
    </DesktopBg>
      </Container>
    );
  }
}
