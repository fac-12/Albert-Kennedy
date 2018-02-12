import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>inter-AKT</h1>
        <p>A mentoring platform for young people in the LGBT community</p>
        <LinkButton text="get started" url="/age" />
        <p>
          Returning user? <Link to="/signin">Log in</Link>
        </p>
      </div>
    );
  }
}
