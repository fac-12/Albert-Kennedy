import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateTopics } from "../../actions/appointment";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import _ from "lodash";

class TopicForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header heading="Let’s talk" text="Choose as many as apply" />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="housing"
            label="Housing and homelessness"
            component={this.renderField}
          />
          <Field
            name="wellbeing"
            label="Wellbeing"
            component={this.renderField}
          />
          <Field
            name="comingout"
            label="Coming out to family and friends"
            component={this.renderField}
          />
          <Field
            name="bullying"
            label="Bullying and abuse"
            component={this.renderField}
          />
          <Field name="skills" label="Skills" component={this.renderField} />
          <Field
            name="other"
            label="Anything else!"
            component={this.renderField}
          />
          <SubmitButton text="next" />
        </form>
      </div>
    );
  }
  renderField(field) {
    const { meta: { error, submitFailed } } = field;
    return (
      <div>
        <label htmlFor={field.name}>{field.label}</label>
        <input type="checkbox" {...field.input} />
        <div>{submitFailed ? error : ""}</div>
      </div>
    );
  }
  onSubmit = values => {
    this.props.updateTopics(values);
  };
}

const validate = values => {
  const errors = {};
  if (_.isEmpty(values)) {
    errors.other =
      "Please pick at least one topic, choose 'Anything else' if you are unsure.";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "TopicForm"
})(connect(null, { updateTopics })(TopicForm));
