import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import TopicForm from "./schedule/Topic";
import MentorForm from "./schedule/Mentor";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/topics" component={TopicForm} />
          <Route exact path="/mentors" component={MentorForm} />
        </div>
      </Router>
    );
  }
}
