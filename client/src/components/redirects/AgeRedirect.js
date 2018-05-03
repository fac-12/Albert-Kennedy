import React, { Component } from "react";
import styled from "styled-components";

import { Container } from "../styling/components";

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
          <a href="http://www.stonewallhousing.org">www.stonewallhousing.org</a>
          <a href="tel:020 7359 5767">020 7359 5767</a>
        </p>

        <p>
          Shelter provides practical assistance, advice, information and
          advocacy to people experiencing homelessness:
          <a href="http://www.shelter.org.uk">www.shelter.org.uk</a>
          <a href="tel:0808 800 4444">0808 800 4444</a>
        </p>

        <p>
          Stonewall can offer information and support for members of the LGBT
          community:
          <a href="https://www.stonewall.org.uk">www.stonewall.org.uk</a>
          <a href="tel:020 7593 1850">020 7593 1850</a>
        </p>
      </Container>
    );
  }
}
