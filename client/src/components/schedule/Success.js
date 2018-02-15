import React, { Component } from "react";
import Header from "../Header";
import LinkButton from "../LinkButton";
import { connect } from "react-redux";
import _ from "lodash";
import styled from "styled-components";

const TextWrapper = styled.div`
  width: 88%;
  margin: auto;
`;

const Button = styled(LinkButton)`
  position: fixed;
  margin: 2vh 5vw 2vh 5vw;
`;

class Success extends Component {
  render() {
    if (_.isEmpty(this.props.newApt)) {
      this.props.history.push("/topics");
      return <div />;
    } else {
      return (
        <div>
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
          </TextWrapper>
          <Button text="done" url="/profile" />
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
