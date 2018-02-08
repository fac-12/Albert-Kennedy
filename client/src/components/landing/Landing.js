import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <p>Landing Page</p>
        <Link to="./topic">Link to topic page</Link>
        <p>
          Returning user? <Link to="/signin">Log in</Link>
        </p>
      </div>
    );
  }
}
