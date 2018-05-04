import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";
import history from "../../history";
import styled from "styled-components";
import {
  fetchAvailibilites,
  updateAptTime,
  onUnload
} from "../../actions/appointment";
import Header from "../Header";
import { Link } from "react-router-dom";
import SubmitButton from "../SubmitButton";

const Card = styled.label`
  width: 90vw;
  height: 110px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 2vh 5vw 2vh 5vw;
  border-left: solid 8px #fb8b24;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + div {
    color: #fb8b24;
  }
`;

const Label = styled.div``;

const Form = styled.form`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3vh;
  align-items: center;
`;

const NoAptsCard = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 15px;
  display: flex;
  align-items: center;
`;

const TextWrap = styled.div`
  padding: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 70%;
    justify-content: center;
  }
`;

class ScheduleForm extends Component {
  render() {
    if (!this.props.availibility) {
      return <Header heading="Schedule an appointment" />;
    } else {
      return (
        <div>
          <Header heading="Schedule an appointment" />
          {this.props.availibility.length === 0
            ? this.renderNoApts()
            : this.renderForm()}
        </div>
      );
    }
  }

  componentDidMount() {
    if (!this.props.mentor) {
      history.push("/mentors");
    } else {
      this.props.fetchAvailibilites(this.props.mentor);
    }
  }

  componentWillUnmount() {
    this.props.onUnload("clear_availabilities");
  }

  renderNoApts() {
    return (
      <NoAptsCard>
        <TextWrap>
          <p>
            Whoops! There are no appointments currently available for this
            mentor
          </p>
          <p>
            Please <Link to="/mentors">pick another.</Link>
          </p>
        </TextWrap>
      </NoAptsCard>
    );
  }

  renderForm() {
    const { handleSubmit } = this.props;
    const dates = this.props.availibility;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <FlexWrapper>
          {_.map(dates, (datetime, index) => (
            <Field
              name="datetime"
              type="radio"
              key={datetime + index}
              label={datetime.replace(/,{1} {1}\d{4}/, " at")}
              value={datetime}
              component={this.renderField}
            />
          ))}
        </FlexWrapper>

        <Field name="error" component={this.renderError} />
        <SubmitButton text="next" />
      </Form>
    );
  }

  renderError(field) {
    const { meta: { error, submitFailed } } = field;
    return <div>{submitFailed ? error : ""}</div>;
  }

  renderField(field) {
    return (
      <Card>
        <Input type="radio" {...field.input} />
        <Label>{field.label}</Label>
      </Card>
    );
  }

  onSubmit = value => {
    this.props.updateAptTime(value, this.props.auth, this.props.newApt);
  };
}

const validate = values => {
  const errors = {};
  if (_.isEmpty(values)) {
    errors.error = "Please select an appointment time.";
  }
  return errors;
};

const mapStateToProps = state => {
  return {
    mentor: state.newApt.mentor,
    availibility: state.newApt.availibility,
    auth: state.auth,
    newApt: state.newApt
  };
};

export default reduxForm({
  validate,
  form: "ScheduleForm"
})(
  connect(mapStateToProps, {
    fetchAvailibilites,
    updateAptTime,
    onUnload
  })(ScheduleForm)
);
