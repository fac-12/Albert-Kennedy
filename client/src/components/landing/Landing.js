import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";
import styled from "styled-components";
import backgroundImage from "../../assets/images/raw/landing-background.jpg"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 60vh;
  width: 100vw;
  height: 60vh;
  padding: 0 5vw 0 5vw;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Img = styled.img`
  position: fixed;
  height: 40%;
  bottom: 0;
  clip-path: polygon(0% 20%,100% 0%,100% 100%,100% 100%,100% 100%,100% 100%, 0% 100%);
  @media (min-width: 600px) {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const LogIn = styled.p`
  position: absolute;
  font-size: 1rem;
  bottom: 3vh;
`;

const Subtitle = styled.p`
  margin-bottom: 5vh;
`;

const DesktopButton = styled(LinkButton)`
  position: inherit;
  margin: 2vh 5vw 2vh 5vw;

`;

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Card>
        <h1>inter-AKT</h1>
        <Subtitle>
          A mentoring platform for young people in the LGBT+ community
        </Subtitle>
        <DesktopButton text="get started" url="/age" primary />
        <LogIn>
          Returning user? <Link to="/signin">Log in</Link>
        </LogIn>
      </Card>
        <Img src={backgroundImage}/>
      </Container>
    );
  }
}
