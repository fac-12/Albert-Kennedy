import React, { Component } from "react";
import styled from "styled-components";


const Container = styled.div`
  position: absolute;
  top: 0;
  min-height: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #DFDBE5;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export default class LGBTRedirect extends Component {
  render() {
    return (
      <Container>
        <p>
          This app is targeted towards those who identify as part of the LGBT
          community.
        </p>
        <p>If you are in crisis: call 999</p>
        <p>If you are facing homelessness: call Shelter on 0808 800 4444 </p>
        <p>
          If you are feeling suicidal: call HopeLine UK on 0800 068 41 41 or
          Samaritans on 116 123
        </p>
        <p>If you are being abused: call ChildLine on 0800 1111</p>
        <p>
          If you’re looking for general support: call The Mix on 0808 808 4994
        </p>
      </Container>
    );
  }
}
