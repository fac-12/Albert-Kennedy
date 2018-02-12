import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";
import SubmitButton from "../SubmitButton";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          name="name"
          type="text"
          label="Name"
          component={this.renderField}
        />
        <Field
          name="email"
          type="email"
          label="Email"
          component={this.renderField}
        />
        <Field
          name="dob"
          type="date"
          label="Date of Birth"
          component={this.renderField}
        />
        <Field
          name="postcode"
          type="text"
          label="Postcode"
          component={this.renderField}
        />
        <Field
          name="gender"
          type="text"
          label="Gender"
          component={this.renderField}
        />
        <Field
          name="sexuality"
          type="text"
          label="Sexuality"
          component={this.renderField}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={this.renderField}
        />
        <Field
          name="confirmPassword"
          type="password"
          label="Confirm password"
          component={this.renderField}
        />
        <SubmitButton text="next" />
      </form>
    );
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input {...field.input} type={field.type} />
      </div>
    );
  }

  handleFormSubmit(values) {
    this.props.registerUser(values);
  }
}

export default reduxForm({
  form: "RegisterForm"
})(connect(null, { registerUser })(RegisterForm));
