import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signinUser, resetError } from "../../actions/auth";
import SubmitButton from "../SubmitButton";

class SigninForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={this.renderField}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={this.renderField}
        />
        <p>{this.renderAlert()}</p>
        <SubmitButton text="login" />
        <p>
          New to inter-AKT? <Link to="/">Start here</Link>
        </p>
      </form>
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
    this.props.signinUser(values);
  }

  componentDidMount() {
    this.props.resetError();
  }
}

const validate = values => {
  const errors = {};
  if (!values.email) errors.email = "Enter your email";
  if (!values.password) errors.password = "Enter your password";
  return errors;
};

const mapStateToProps = state => ({ error: state.error });

export default reduxForm({
  validate,
  form: "SigninForm"
})(connect(mapStateToProps, { signinUser, resetError })(SigninForm));
