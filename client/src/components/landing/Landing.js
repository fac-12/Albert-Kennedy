import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Card,
  LogIn,
  Subtitle,
  DesktopButton,
  H2
} from "../styling/components";

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Card>
          <H2>inter-AKT</H2>
          <Subtitle>
            A digital mentoring platform for young people in the LGBT+ community
          </Subtitle>
          <DesktopButton text="get started" url="/age" primary />
          <LogIn>
            Returning user? <Link to="/signin">Log in</Link>
          </LogIn>
        </Card>
      </Container>
    );
  }
}
