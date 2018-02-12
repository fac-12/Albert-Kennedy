import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>inter-AKT</h1>
        <p>A mentoring platform for young people in the LGBT community</p>
        <Link to="/age">Get Started</Link>
        <p>
          Returning user? <Link to="/signin">Log in</Link>
        </p>
      </div>
    );
  }
}
