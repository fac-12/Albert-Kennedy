import React, { Component } from "react";
import LinkButton from "../LinkButton";
import styled from "styled-components";
import lgbtImage from "../../assets/images/raw/lgbt-flag.jpg"


const Container = styled.div`
  position: relative;

  @media (min-width: 630px) {
    background-color: #7c53a2;
    z-index: -1;
  }
`;

const Mask = styled.div`
  @media (min-width: 630px) {
    opacity: 0.5;
    background-color: #7c53a2;
    width: 100vw;
    height: 100vh;
  }
`;

const DesktopBg = styled.div`
  padding: 0 5vw 0 5vw;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 630px) {
    background-image: url(${lgbtImage});
    background-repeat: no-repeat;
    height: 100vh;
    margin: 1rem 4rem;
    background-size: 200%;
    background-position: 50% 50%;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    background-color: #7c53a2;
  }
`;

const Card = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 2rem;
  @media (min-width: 630px) {
    width: 20rem;
    height: 20rem;
    padding: 1rem;
  }
`;

const Img = styled.img`
  position: fixed;
  bottom: 0;
  clip-path: polygon(
    0% 20%,
    100% 0%,
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    0% 100%
  );
  display: block;
  max-width: 100vw;
  max-height: 50vh;
  width: auto;
  height: auto;
  opacity: 0.6;
  @media (min-width: 630px) {
    display: none;
  }
`;

const LogIn = styled.p`
  font-size: 1rem;
  bottom: 3vh;
`;

const StyledLink = styled.a`
  color: #0000EE;
  text-decoration: underline;
`;

const Subtitle = styled.p`
  margin: 1rem;
`;

const DesktopButton = styled(LinkButton)`
  position: initial;
  margin: 0.5rem;
  @media (min-width: 630px) {
    position: initial;
    width: 90%;
    height: 60px;
    margin-bottom: 1.5rem;
  }
`;

const Heading = styled.h2`
  color: #7C53A2;
  top: 3rem;
`;

export default class LGBT extends Component {
  render() {
    return (
      <Container>
        <Img src={lgbtImage}/>
        <DesktopBg>
          <Mask />
          <Card>
            <Heading><h2>inter-AKT</h2></Heading>
            <Subtitle><p>Do you identify as part of the LGBT+ community?</p></Subtitle>
            <DesktopButton text="yes" url="/topics" primary />
            <DesktopButton text="no" url="/lgbtredirect" />
          </Card>
        </DesktopBg>
      </Container>
    );
  }
}
