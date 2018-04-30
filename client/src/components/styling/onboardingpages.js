import styled from "styled-components";
import LinkButton from "../LinkButton";

const Container = styled.div`
  position: relative;
  font-size: 1rem;
  background-color: #7c53a2;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239469bb' fill-opacity='0.49'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    position: relative;
  }
`;

const Card = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
  margin: 1.5rem;
  @media (min-width: 768px) {
    position: absolute;
    width: 25rem;
    height: 25rem;
    padding: 1rem;
    z-index: 2;
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
  margin: 1rem 2rem;
  font-size: 1rem;
`;

const DesktopButton = styled(LinkButton)`
  position: initial;
  margin: 0.5rem;
  width: 90%;
  @media (min-width: 768px) {
    position: initial;
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
  Card,
  LogIn,
  StyledLink,
  Subtitle,
  DesktopButton,
  LinkButton,
  H2
};
