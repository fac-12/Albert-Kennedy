import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        Landing Page
        <Link to="./topic">Link to topic page</Link>
      </div>
    );
  }
}
