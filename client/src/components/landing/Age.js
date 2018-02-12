import React, { Component } from "react";
import LinkButton from "../LinkButton";

export default class Age extends Component {
  render() {
    return (
      <div>
        <p>Are you aged between 13 and 25?</p>
        <LinkButton text="yes" url="/lgbt" />
        <LinkButton text="no" url="/ageredirect" />
      </div>
    );
  }
}
