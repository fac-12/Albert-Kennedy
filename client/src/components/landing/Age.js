import React, { Component } from "react";
import ageImage from "../../assets/images/raw/age-background.jpg"

<<<<<<< HEAD
import {Container,
Mask,
DesktopBg,
Card,
Img,
Subtitle,
DesktopButton,
H2} from "../styling/onboardingpages";


=======
const Container = styled.div`
  position: relative;
  @media (min-width: 630px) {
    position: relative;
    background-color: #7c53a2;
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
    background-image: url(${ageImage});
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
    position: absolute;
    width: 25rem;
    height: 25rem;
    padding: 1rem;
    z-index: 2;
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;

const H2 = styled.h2`
  color: #7C53A2;
  top: 3rem;
`;
>>>>>>> parent of 18e0dbe... consistency throughout onboarding pages

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
