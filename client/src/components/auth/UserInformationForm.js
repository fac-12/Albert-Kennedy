import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, resetError } from "../../actions/auth";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import styled from "styled-components";

import {
  Container,
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

const ethnicities = [
  "Arab",
  "Asian - Bangladeshi",
  "Asian - British",
  "Asian - Chinese",
  "Asian - Indian",
  "Asian - Pakistani",
  "Black - African",
  "Black - British",
  "Black - Caribbean",
  "Mixed/Multiple - White and Asian",
  "Mixed/Multiple - White and Black African",
  "Mixed/Multiple - White and Black Caribbean",
  "White - British",
  "White - Irish",
  "Traveller - Irish Traveller",
  "Traveller - Romany/Gyspy",
  "Prefer not to say",
  "Other"
];

const EthnicityField = styled(Field)`
  height: 5vh;
  width: 80%;
  margin-top: 1rem;
  background-color: white;
  border: 1px solid #333333;
  font-size: 1rem;

  > option {
    margin: 1px;
  }
`;

class UserInformationForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    const text = `AKT is asking for this information because it is important for us to
    know who is accessing this service so that we can provide the most
    appropriate support. By completing this form you are consenting to The
    Albert Kennedy Trust storing a record of your details and contacting
    you regarding related support. If you wish to withdraw your consent,
    please contact onlinesupport@akt.org.uk`;

    return (
      <div className="container__div">
        <Header heading="Personal Information" text={text} size="small" />
        <Register>
          Returning user? <Link to="/signin">Log in</Link>
        </Register>

        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="dob"
            type="date"
            label="Date of Birth"
            placeholder="Date of birth"
            component={this.renderField}
          />

          <EthnicityField
            label="ethnicity"
            name="ethnicity"
            component="select"
            required="yes"
          >
            <option value="">Ethnicity</option>
            {ethnicities.map(ethnicityOption => (
              <option value={ethnicityOption} key={ethnicityOption}>
                {ethnicityOption}
              </option>
            ))}
          </EthnicityField>

          <Field
            name="sexuality"
            type="text"
            label="Sexuality"
            placeholder="Sexuality"
            component={this.renderField}
          />
          <Field
            name="gender"
            type="text"
            label="Gender"
            placeholder="Gender"
            component={this.renderField}
          />
          <p>{this.renderAlert()}</p>
          <SubmitButton text="next" />
        </Form>
      </div>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
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
    this.props.registerUser(values, this.props.newApt);
  }
}

const mapStateToProps = state => ({
  error: state.error,
  newApt: state.newApt,
  user_info: state.auth.user_info
});

const validate = values => {
  const errors = {};
  if (!values.dob) errors.dob = "Enter your date of birth";
  if (!values.ethnicity)
    errors.ethnicity = "Please choose an option in the list";
  if (!values.sexuality)
    errors.sexuality = "Choose an option that you feel you relate to";
  if (!values.gender) errors.gender = "Choose any that apply";

  return errors;
};

export default reduxForm({
  validate,
  form: "UserInformationForm"
})(connect(mapStateToProps, { registerUser, resetError })(UserInformationForm));
