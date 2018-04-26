import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";
import styled from "styled-components";
import backgroundImage from "../../assets/images/raw/landing-background.jpg"

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  @media (min-width: 630px) {
  background-color: #7C53A2;
  z-index: -1;
}
`;

const Mask = styled.div`

  @media (min-width: 630px) {
  opacity: 0.5;
  background-color: #7C53A2;
  width: 100vw;
  height: 100vh;
}
`;

const DesktopBg = styled.div`
min-height: 40vh;
padding: 0 5vw 0 5vw;
font-size: 1.2rem;
text-align: center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;

@media (min-width: 630px) {
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  height: 100vh;
  margin: 1rem 4rem;
  background-size: 150rem;
  background-position: 50% 50%;
  box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5);
  background-color: #7C53A2;
}
`;
const Card = styled.div`
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 10vh;
  z-index: 1;
  @media (min-width: 630px) {
    width: 400px;
    height: 400px;
    padding: 1rem;
  }
`;

const Img = styled.img`
  position: fixed;
  bottom: 0;
  clip-path: polygon(0% 20%,100% 0%,100% 100%,100% 100%,100% 100%,100% 100%, 0% 100%);
  display: block;
  max-width:100vw;
  max-height:60vh;
  width: auto;
  height: auto;
  opacity: 0.4;

  @media (min-width: 630px) {
    display: none;
    
  }
`;

const LogIn = styled.p`
  font-size: 1rem;
  bottom: 3vh;
`;

const Subtitle = styled.p`

`;

const DesktopButton = styled(LinkButton)`
  position: initial;
  @media (min-width: 630px) {
    margin: 0;
    position: initial;
    width: 90%;
    height: 60px;
  }
`;

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <DesktopBg>
          <Mask><Img src={backgroundImage}/></Mask>
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
    </DesktopBg>
      </Container>
    );
  }
}
