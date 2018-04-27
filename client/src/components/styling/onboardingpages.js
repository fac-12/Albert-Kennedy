import styled from 'styled-components';
import LinkButton from "../LinkButton";

const Container = styled.div`
  position: relative;
  font-size: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), linear-gradient(180deg, #7C53A2 0%, rgba(124, 83, 162, 0) 100%);
  @media (min-width: 768px) {
    position: relative;
    background-color: #7c53a2;
  }
`;

const Mask = styled.div`
  background-color: #7c53a2;
  opacity: 0.5;
  @media (min-width: 768px) {

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

  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
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
  max-height: 45vh;
  width: auto;
  height: auto;
  opacity: 0.6;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LogIn = styled.p`
  font-size: 1rem;
  bottom: 3vh;
`;

const StyledLink = styled.a`
  color: #0000ee;
  text-decoration: underline;
`;

const Subtitle = styled.p`
  margin: 1rem;
  font-size: 1rem;
`;

const DesktopButton = styled(LinkButton)`
  position: initial;
  margin: 0.5rem;
  @media (min-width: 768px) {
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
  color: #7c53a2;
  margin-top: 1rem;
`;

export {
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
}
