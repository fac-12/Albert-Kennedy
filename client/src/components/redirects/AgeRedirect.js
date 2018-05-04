import React, { Component } from "react";
import styled from "styled-components";

import { Container, Card, RedirectP } from "../styling/components";

export default class AgeRedirect extends Component {
  render() {
    return (
      <Container>
        <Card>
          <RedirectP>
            If you are not aged 13-25 years old we recommend contacting the
            following organisations:
          </RedirectP>

          <RedirectP>
            Stonewall Housing is a specialist lesbian, gay, bisexual and
            transgender (LGBT) housing advice and support provider:<br />
            <a href="http://www.stonewallhousing.org">
              www.stonewallhousing.org
            </a>
            {" or call them: "}
            <a href="tel:020 7359 5767">020 7359 5767</a>
          </RedirectP>

          <RedirectP>
            Shelter provides practical assistance, advice, information and
            advocacy to people experiencing homelessness:<br />
            <a href="http://www.shelter.org.uk">www.shelter.org.uk</a>
            {" or call them: "}
            <a href="tel:0808 800 4444">0808 800 4444</a>
          </RedirectP>

          <RedirectP>
            Stonewall can offer information and support for members of the LGBT
            community:<br />
            <a href="https://www.stonewall.org.uk">www.stonewall.org.uk</a>
            {" or call them: "}
            <a href="tel:020 7593 1850">020 7593 1850</a>
          </RedirectP>
        </Card>
      </Container>
    );
  }
}
