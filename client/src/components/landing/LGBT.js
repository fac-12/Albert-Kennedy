import React, { Component } from "react";
import primitive from "primitive";

import {
  Container,
  Card,
  Subtitle,
  DesktopButton,
  H2,
  ButtonDiv
} from "../styling/components";

import plant from "../../assets/plant.jpg";

class MyCanvas extends Component {
  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    );
  }
}

const opts = {
  input: plant,
  output: "canvas",
  numSteps: 400,
  numCandidateShapes: 20,
  numCandidateMutations: 20
};

const newPic = primitive(opts);

const showPic = () =>
  newPic
    .then(x => {
      console.log(x, "hello");
    })
    .catch(console.log("error"));

showPic();

export default class LGBT extends Component {
  render() {
    return (
      <Container>
        <Card>
          <MyCanvas />
          <H2>inter-AKT</H2>
          <Subtitle>Do you identify as part of the LGBT+ community?</Subtitle>
          <ButtonDiv>
            <DesktopButton text="yes" url="/topics" primary />
            <DesktopButton text="no" url="/lgbtredirect" />
          </ButtonDiv>
        </Card>
      </Container>
    );
  }
}
