import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Age extends Component {
  render() {
    return (
      <div>
        <p>Are you aged between 13 and 25?</p>
        <Link to="/lgbt">Yes</Link>
        <Link to="/ageredirect">No</Link>
      </div>
    );
  }
}
