import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LGBT extends Component {
  render() {
    return (
      <div>
        <p>Do you identify as part of the LGBT community?</p>
        <Link to="/topics">Yes</Link>
        <Link to="/lgbtredirect">No</Link>
      </div>
    );
  }
}
