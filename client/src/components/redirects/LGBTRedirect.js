import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  min-height: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 1.2rem;
  display: flex;
  padding: 0 5vw 0 5vw;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-content: center;
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(180deg, #7c53a2 0%, rgba(124, 83, 162, 0) 100%);
`;

export default class LGBTRedirect extends Component {
  render() {
    return (
      <Container>
        <p>
          If you do not identify as LGBT+ we recommend contacting these
          organisations instead:
        </p>
        <p>
          Shelter provides practical assistance, advice, information and
          advocacy to people experiencing homelessness:
          <a href="http://www.shelter.org.uk">www.shelter.org.uk</a>
          <a href="tel:0808 800 4444">0808 800 4444</a>
        </p>
        <p>
          Childine offer help and advice to anyone under 19 in the UK with any
          issue they’re going through:
          <a href="https://www.childline.org.uk">www.childline.org.uk</a>
          <a href="tel:0800 1111">0800 1111</a>
        </p>
        <p>
          The Mix is an online service that provides information and support on
          a range of issues for under 25s in the UK:
          <a href="http://www.themix.org.uk">www.themix.org.uk</a>
          <a href="tel:0808 808 4994">0808 808 4994</a>
        </p>
        <p>
          If you are being abused: call ChildLine on{" "}
          <a href="tel:0800 1111">0800 1111</a>
        </p>
        <p>
          If you’re looking for general support: call The Mix on{" "}
          <a href="tel:0808 808 4994">0808 808 4994</a>
        </p>
      </Container>
    );
  }
}
