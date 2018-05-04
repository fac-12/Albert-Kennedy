import React, { Component } from "react";
import Header from "../Header";
import LinkButton from "../LinkButton";
import { connect } from "react-redux";
import _ from "lodash";
import styled from "styled-components";
const TextWrapper = styled.div`
  width: 88%;
  margin: auto;
  text-align: center;
  justify-content: center;
`;

const Button = styled(LinkButton)`
  background: white;
  border: 2px solid #f47a20;
  border-radius: 5px;
  box-sizing: border-box;
  width: 80%;
  margin: 10vw;
  height: 60px;
  font-size: 16px;
  @media (min-width: 768px) {
    width: 50%;
    margin: 5vw;
  }
`;

class Success extends Component {
  render() {
    if (_.isEmpty(this.props.newApt)) {
      this.props.history.push("/topics");
      return <div />;
    } else {
      return (
        <div className="container__div">
          <Header heading="Success!" />
          <TextWrapper>
            <p>
              You have booked an appointment with <span />
              <strong>{this.props.newApt.mentor}</strong> on{" "}
              <strong>{this.props.newApt.aptTime.datetime}</strong>
            </p>
            <p>You have been sent an email with a link to join the chat. </p>
            <p>
              Or, log back in at the given time to join the chat from your
              profile page.
            </p>
            <Button text="done" url="/profile" />
          </TextWrapper>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    newApt: state.newApt
  };
};

export default connect(mapStateToProps)(Success);
