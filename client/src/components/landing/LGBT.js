import React, { Component } from "react";
import LinkButton from "../LinkButton";

export default class LGBT extends Component {
  render() {
    return (
      <div>
        <p>Do you identify as part of the LGBT+ community?</p>
        <LinkButton text="yes" url="/topics" primary />
        <LinkButton text="no" url="/lgbtredirect" />
      </div>
    );
  }
}
