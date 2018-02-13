import React, { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { fetchAppointments } from "../../actions/appointment";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header heading="My Appointments" logout />
        <LinkButton text="new appointment" url="/topics" primary />
        <p>
          Immediate crisis? Don't use this site -{" "}
          <Link to="/crisis">use these resources instead</Link>
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchAppointments();
  }
}

const mapStateToProps = state => ({ apts: state.userApts.apts });

export default connect(mapStateToProps, { fetchAppointments })(Profile);
