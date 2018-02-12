import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchAvailibilites, updateAptTime } from "../../actions/appointment";
import SubmitButton from "../SubmitButton";

class ScheduleForm extends Component {
  render() {
    if (!this.props.availibility) {
      return <div />;
    } else {
      const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {_.map(this.props.availibility, time => (
            <Field
              name="datetime"
              type="radio"
              key={time}
              label={time}
              value={time}
              component={this.renderField}
            />
          ))}
          <SubmitButton text="next" />
        </form>
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
  onSubmit = values => {
    this.props.updateAptTime(values);
  };
}

const mapStateToProps = state => {
  return {
    mentor: state.newApt.mentor,
    availibility: state.newApt.availibility
  };
};

export default reduxForm({
  form: "ScheduleForm"
})(
  connect(mapStateToProps, { fetchAvailibilites, updateAptTime })(ScheduleForm)
);
