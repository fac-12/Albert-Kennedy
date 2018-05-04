import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Header from "../Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetError, authFormInfo } from "../../actions/auth";
import SubmitButton from "../SubmitButton";
import styled from "styled-components";

import {
  Card,
  LogIn,
  Subtitle,
  DesktopButton,
  LinkButton,
  H2,
  Input,
  FormElement,
  Error,
  Register,
  Form
} from "../styling/components";

class AuthForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    const text = `Your contact details will be kept private and will not be shared with your mentor.`;
    return (
      <div className="container__div">
        <Header heading="Please fill in your details" text={text} />
        <Register>
          Returning user? <Link to="/signin">Log in</Link>
        </Register>

        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="name"
            type="text"
            label="Name"
            placeholder="Name"
            component={this.renderField}
          />
          <Field
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            component={this.renderField}
          />
          <Field
            name="postcode"
            type="text"
            label="Postcode"
            placeholder="Postcode"
            component={this.renderField}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            component={this.renderField}
          />
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm password"
            placeholder="Confirm password"
            component={this.renderField}
          />
          <p>{this.renderAlert()}</p>
          <SubmitButton text="next" />
        </Form>
      </div>
    );
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    return (
      <FormElement>
        <Input
          {...field.input}
          type={field.type}
          placeholder={field.placeholder}
        />
        <Error>{touched ? error : ""}</Error>
      </FormElement>
    );
  }

  renderAlert() {
    if (this.props.error) {
      return <span>{this.props.error}</span>;
    }
  }

  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmit(values) {
    this.props.authFormInfo(values, this.props.newApt);
  }
}

const checkPassword = string => {
  let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$");

  return regex.test(string);
};

const checkPostcode = string => {
  let regex = new RegExp(
    "([Gg][Ii][Rr]0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\\s?[0-9][A-Za-z]{2}$)"
  );
  return regex.test(string);
};

const mapStateToProps = state => ({
  error: state.error,
  newApt: state.newApt
});

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = "Enter your name";
  if (!values.email) errors.email = "Enter an email";
  if (!values.postcode) errors.postcode = "Enter a postcode";
  if (!checkPostcode(values.postcode))
    errors.postcode = "That's not a valid postcode";
  if (!values.password) errors.password = "Enter your password";
  if (!checkPassword(values.password)) {
    errors.password =
      "Include one uppercase letter, one number and a minimum of 6 characters.";
  }
  if (values.password !== values.confirmPassword)
    errors.confirmPassword = "Oops! These passwords don't match.";
  if (!values.confirmPassword)
    errors.confirmPassword = "Enter your password again";
  return errors;
};

export default reduxForm({
  validate,
  form: "AuthForm"
})(connect(mapStateToProps, { authFormInfo, resetError })(AuthForm));
