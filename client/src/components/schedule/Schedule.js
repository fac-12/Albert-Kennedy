import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchAvailibilites, updateAptTime } from "../../actions/appointment";
import Header from "../Header";
import SubmitButton from "../SubmitButton";

class ScheduleForm extends Component {
  render() {
    if (!this.props.availibility) {
      return <div />;
    } else {
      const { handleSubmit } = this.props;
      return (
        <div>
        <Header heading="Schedule an appointment" />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {_.map(this.props.availibility, time => (
            <Field
              name="datetime"
              type="radio"
              key={time}
              label={time[0] + ", " + time[1]}
              value={time[0] + ", " + time[1]}
              component={this.renderField}
            />
          ))}
          <SubmitButton text="next" />
        </form>
      </div>
      );
    }
  }

  componentDidMount() {
    this.props.fetchAvailibilites(this.props.mentor);
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="radio" {...field.input} />
      </div>
    );
  }
  onSubmit = value => {
    this.props.updateAptTime(value, this.props.auth, this.props.newApt);
  };
}

const mapStateToProps = state => {
  return {
    mentor: state.newApt.mentor,
    availibility: state.newApt.availibility,
    auth: state.auth,
    newApt: state.newApt
  };
};

export default reduxForm({
  form: "ScheduleForm"
})(
  connect(mapStateToProps, { fetchAvailibilites, updateAptTime })(ScheduleForm)
);
