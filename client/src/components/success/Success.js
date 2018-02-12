import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../header";

class Success extends Component {
  render() {
  	console.log("props", this.props)
  	console.log("mentor", this.props.mentor);
  	console.log("time", this.props.time);
  	
  	
    return (
      <div>
      <Header headerText="Success!"/>
        <p>You have an appointment scheduled with {this.props.mentor.mentor} at {this.props.time.datetime} </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
	console.log(state);
  return {
    mentor: state.newApt.mentor,
    time: state.newApt.aptTime
  };
};

export default connect(mapStateToProps, { })(Success);