import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../actions/auth";

import history from "../history";
import TopicForm from "./schedule/Topic";
import MentorForm from "./schedule/Mentor";
import ScheduleForm from "./schedule/Schedule";
import RegisterForm from "./auth/Register";
import SigninForm from "./auth/Signin";
import Profile from "./profile/Profile";
import Landing from "./landing/Landing";
import Age from "./landing/Age";

class App extends Component {
  render() {
    if (this.props.auth === null) return <div />;
    return (
      <Router history={history}>
        <div>
          <Route
            exact
            path="/"
            render={props =>
              !this.props.auth ? <Landing /> : <Redirect to="/profile" />
            }
          />
          <Route
            exact
            path="/profile"
            render={props =>
              !this.props.auth ? <Profile /> : <Redirect to="/signin" />
            }
          />
          <Route exact path="/age" component={Age} />
          <Route exact path="/topics" component={TopicForm} />
          <Route exact path="/mentors" component={MentorForm} />
          <Route exact path="/schedule" component={ScheduleForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/signin" component={SigninForm} />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    this.props.getUser();
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { getUser })(App);
