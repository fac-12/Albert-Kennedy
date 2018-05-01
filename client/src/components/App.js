import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../actions/auth";

import history from "../history";
import TopicForm from "./schedule/Topic";
import MentorForm from "./schedule/Mentor";
import ScheduleForm from "./schedule/Schedule";
import Success from "./schedule/Success";
import AuthForm from "./auth/AuthForm";
import UserInformationForm from "./auth/UserInformationForm";
import SigninForm from "./auth/Signin";
import Profile from "./profile/Profile";
import Landing from "./landing/Landing";
import Age from "./landing/Age";
import LGBT from "./landing/LGBT";
import AgeRedirect from "./redirects/AgeRedirect";
import LGBTRedirect from "./redirects/LGBTRedirect";
import Crisis from "./redirects/Crisis";
import ResetPasswordForm from "./auth/ResetPassword";

class App extends Component {
  render() {
    if (this.props.auth === null) return <div />;
    return (
      <Router history={history}>
        <div className="root__div">
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
              this.props.auth ? <Profile /> : <Redirect to="/signin" />
            }
          />
          <Route exact path="/age" component={Age} />
          <Route exact path="/lgbt" component={LGBT} />
          <Route exact path="/ageredirect" component={AgeRedirect} />
          <Route exact path="/lgbtredirect" component={LGBTRedirect} />
          <Route exact path="/crisis" component={Crisis} />
          <Route exact path="/topics" component={TopicForm} />
          <Route exact path="/mentors" component={MentorForm} />
          <Route exact path="/schedule" component={ScheduleForm} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/register" component={AuthForm} />
          <Route exact path="/userinfoform" component={UserInformationForm} />
          <Route exact path="/signin" component={SigninForm} />
          <Route exact path="/forgotpassword" component={ResetPasswordForm} />
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
