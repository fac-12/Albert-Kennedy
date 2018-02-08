import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SigninForm extends Component {
  render() {
    return (
      <form>
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
}

export default reduxForm({
  form: "SigninForm"
})(SigninForm);
