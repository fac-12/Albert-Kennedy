import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signinUser, resetError } from "../../actions/auth";
import styled from "styled-components";

import {
  Container,
  Card,
  LogIn,
  StyledLink,
  Subtitle,
  DesktopButton,
  LinkButton,
  H2,
  Input,
  FormElement,
  Error,
  Register,
  Header,
  Button,
  Form
} from "../styling/components";

class SigninForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Card>
            <H2>inter-AKT</H2>
            <Field
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              component={this.renderField}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              component={this.renderField}
            />

            <p>{this.renderAlert()}</p>
            <Button type="submit">login</Button>
            <Register>
              New to inter-AKT? <Link to="/">Start here</Link>
            </Register>
          </Card>
        </Form>
      </Container>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    return (
      <div>
        <Input
          {...field.input}
          type={field.type}
          placeholder={field.placeholder}
        />
        <Error>{touched ? error : ""}</Error>
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
