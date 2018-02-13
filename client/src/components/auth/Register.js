import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/auth";
import Header from "../Header";
import SubmitButton from "../SubmitButton";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    const text = `Your personal details will be kept private and will not be shared with your mentor.`;
    return (
      <div>
        <Header heading="Please fill in your details" text={text} />
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
          <p>{this.renderAlert()}</p>
          <SubmitButton text="next" />
        </form>

        <p>
          Returning user? <Link to="/signin">Log in</Link>
        </p>
      </div>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    return (
      <div>
        <label>{field.label}</label>
        <input {...field.input} type={field.type} />
        <p>{touched ? error : ""}</p>
      </div>
    );
  }

  renderAlert() {
    if (this.props.error) {
      return <span>{this.props.error}</span>;
    }
  }

  handleFormSubmit(values) {
    this.props.registerUser(values);
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = "Enter your name";
  if (!values.email) errors.email = "Enter an email";
  if (!values.dob) errors.dob = "Enter your date of birth";
  if (!values.postcode) errors.postcode = "Enter a postcode";
  if (!values.password) errors.password = "Enter your password";
  if (values.password !== values.confirmPassword)
    errors.confirmPassword = "Passwords do not match";
  if (!values.confirmPassword)
    errors.confirmPassword = "Enter your password again";
  return errors;
};

const mapStateToProps = state => ({ error: state.error });

export default reduxForm({
  validate,
  form: "RegisterForm"
})(connect(mapStateToProps, { registerUser })(RegisterForm));
