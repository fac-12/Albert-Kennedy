import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopicForm from "./schedule/Topic";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={TopicForm} />
      </Router>
    );
  }
}
