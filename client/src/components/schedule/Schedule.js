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
            <Field name="error" component={this.renderError} />
            <SubmitButton text="next" />
          </form>
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.fetchAvailibilites(this.props.mentor);
  }

  renderError(field) {
    const { meta: { error, submitFailed } } = field;
    return <div>{submitFailed ? error : ""}</div>;
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
    this.props.updateAptTime(value, this.props.auth);
  };
}

const validate = values => {
  const errors = {};
  if (_.isEmpty(values)) {
    errors.error = "Please select an appointment time.";
  }
  return errors;
};

const mapStateToProps = state => {
  return {
    mentor: state.newApt.mentor,
    availibility: state.newApt.availibility,
    auth: state.auth
  };
};

export default reduxForm({
  validate,
  form: "ScheduleForm"
})(
  connect(mapStateToProps, { fetchAvailibilites, updateAptTime })(ScheduleForm)
);
