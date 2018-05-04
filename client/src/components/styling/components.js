import styled from "styled-components";
import LinkButton from "../LinkButton";

const Container = styled.div`
  font-size: 1rem;
  background-color: #7c53a2;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239469bb' fill-opacity='0.49'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  text-align: center;
  margin: 1rem;
  @media (min-width: 768px) {
    width: 30rem;
    height: 32rem;
  }
`;

const LogIn = styled.p`
  margin-top: 1rem;
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
  margin: 0.5rem;
  width: 90%;
  @media (min-width: 768px) {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: FLEX;
  flex-direction: COLUMN;
  align-items: CENTER;
`;

const H2 = styled.h2`
  color: #7c53a2;
  margin-top: 1rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Input = styled.input`
  box-shadow: none;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 1rem;
  font-size: 1rem;
  width: 100%;
  ::placeholder {
    color: black;
    font-size: 1rem;
  }

  &:focus {
    -webkit-appearance: none;
    outline: none;
  }
`;

const FormElement = styled.div`
  width: 80%;
  @media (min-width: 768px) {
  }
`;

const Error = styled.p`
  margin: 0;
  color: #fb8b24;
  font-size: 0.75em;
`;

const Register = styled.p`
  margin-top: 1rem;
  align-items: center;
  text-align: center;
`;

const Header = styled.h1`
  margin-top: 5vh;
  margin-bottom: 10vh;
`;

const Button = styled.button`
  background: #f47a20;
  border: 2px solid #f47a20;
  border-radius: 5px;
  box-sizing: border-box;
  width: 90%;
  height: 60px;
  font-size: 16px;
  margin-top: 1rem;
  @media (min-width: 768px) {
    width: 90%;
    margin-top: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RedirectP = styled.p`
  padding: 1rem;
`;

export {
  Container,
  Card,
  LogIn,
  StyledLink,
  Subtitle,
  DesktopButton,
  LinkButton,
  H2,
  Input,
  FormElement,
  Error,
  Register,
  Header,
  Button,
  Form,
  RedirectP,
  ButtonDiv
};
