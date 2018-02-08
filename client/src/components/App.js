import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import TopicForm from "./schedule/Topic";
import MentorForm from "./schedule/Mentor";
import ScheduleForm from "./schedule/Schedule";
import RegisterForm from "./auth/Register";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/topics" component={TopicForm} />
          <Route exact path="/mentors" component={MentorForm} />
          <Route exact path="/schedule" component={ScheduleForm} />
          <Route exact path="/register" component={RegisterForm} />
        </div>
      </Router>
    );
  }
}
