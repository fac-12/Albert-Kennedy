import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  min-height: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 5vw 0 5vw;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(180deg, #7c53a2 0%, rgba(124, 83, 162, 0) 100%);
`;

export default class AgeRedirect extends Component {
  render() {
    return (
      <Container>
        <p>
          If you are not aged 13-25 years old we recommend contacting the
          following organisations:
        </p>

        <p>
          Stonewall Housing is a specialist lesbian, gay, bisexual and
          transgender (LGBT) housing advice and support provider:
          <p>
            <a href="http://www.stonewallhousing.org">
              www.stonewallhousing.org
            </a>
          </p>
          <p>
            <a href="tel:020 7359 5767">020 7359 5767</a>
          </p>
        </p>

        <p>
          Shelter provides practical assistance, advice, information and
          advocacy to people experiencing homelessness:
          <p>
            <a href="http://www.shelter.org.uk">www.shelter.org.uk</a>
          </p>
          <p>
            <a href="tel:0808 800 4444">0808 800 4444</a>
          </p>
        </p>

        <p>
          Stonewall can offer information and support for members of the LGBT
          community:
          <p>
            <a href="https://www.stonewall.org.uk">www.stonewall.org.uk</a>
          </p>
          <p>
            <a href="tel:020 7593 1850">020 7593 1850</a>
          </p>
        </p>
      </Container>
    );
  }
}
