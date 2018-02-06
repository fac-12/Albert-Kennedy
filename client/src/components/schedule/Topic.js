import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateTopics } from "../../actions/appointment";

class TopicForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
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
        <button type="submit">next</button>
      </form>
    );
  }
  renderField(field) {
    return (
      <div>
        <label htmlFor={field.name}>{field.label}</label>
        <input type="checkbox" {...field.input} />
      </div>
    );
  }
  onSubmit = values => {
    this.props.updateTopics(values);
  };
}

export default reduxForm({
  form: "TopicForm"
})(connect(null, { updateTopics })(TopicForm));
