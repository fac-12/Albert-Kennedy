import React, { Component } from "react";
import LinkButton from "../LinkButton";

class Success extends Component {
  render() {
    return (
      <div>
        <p>You have an appointment with [IMPORT DATA HERE]. </p>
        <p>Log back in to the site then for your chat. </p>
        <p>
          In the meantime, click done to see services in your area which may be
          of interest to you.
        </p>
        <LinkButton text="done" url="/profile" />
      </div>
    );
  }
}

export default Success;
