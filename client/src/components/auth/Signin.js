import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signinUser } from "../../actions/auth";

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
        <button type="submit">login</button>
        <p>
          New to inter-AKT? <Link to="/">Start here</Link>
        </p>
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
    this.props.signinUser(values);
  }
}

export default reduxForm({
  form: "SigninForm"
})(connect(null, { signinUser })(SigninForm));
