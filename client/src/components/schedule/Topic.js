import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateTopics } from "../../actions/appointment";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import _ from "lodash";
import styled from "styled-components";

import bullying from "../../assets/icons/bullying.svg";
import comingout from "../../assets/icons/comingout.svg";
import housing from "../../assets/icons/house.svg";
import other from "../../assets/icons/other.svg";
import skills from "../../assets/icons/skills.svg";
import wellbeing from "../../assets/icons/wellbeing.svg";
import { FormElement } from "../styling/components";

const Input = styled.input`
  display: none;

  &:checked + div {
    color: #f47a20;
  }
`;

const Card = styled.label`
  width: 45%;
  height: 110px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px;
  border-left: solid 8px #f47a20;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

const Label = styled.div`
  font-size: 0.9rem;
  padding: 5px;
`;

const Img = styled.img`
  height: 40px;
  width: auto;
  padding: 5px;
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

const Error = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  align-self: flex-start;
  max-width: 90%;
  color: #f47a20;
`;

const Form = styled.form`
  height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Text = styled.label`
  font-size: 16px;
  padding: 1rem;
`;

const TextInput = styled.input`
  display: block;
  width: 90%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  @media (min-width: 768px) {
    padding: 1.2rem;
    width: 100%;
  }
`;

class TopicForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container__div">
        <Header
          heading="Let’s talk!"
          text="Choose any topics that you feel apply"
        />
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <FlexWrapper>
            <Field
              name="housing"
              label="Housing and homelessness"
              src={housing}
              component={this.renderField}
            />
            <Field
              name="wellbeing"
              label="Wellbeing"
              src={wellbeing}
              component={this.renderField}
            />
            <Field
              name="comingout"
              label="Coming out to family and friends"
              src={comingout}
              component={this.renderField}
            />
            <Field
              name="bullying"
              label="Bullying and abuse"
              src={bullying}
              component={this.renderField}
            />
            <Field
              name="skills"
              label="Skills"
              src={skills}
              component={this.renderField}
            />
            <Field
              name="other"
              label="Anything else!"
              src={other}
              component={this.renderField}
            />

            <Field
              name="info"
              label="Please share any further information or other things you'd like to talk about:"
              component={this.renderTextInput}
            />
          </FlexWrapper>
          <SubmitButton text="next" />
        </Form>
      </div>
    );
  }

  renderField = field => {
    const { meta: { error, submitFailed } } = field;
    return [
      <Card htmlFor={field.name} key={1}>
        <Img src={field.src} />
        <Input id={field.name} type="checkbox" {...field.input} />
        <Label>{field.label}</Label>
      </Card>,
      <Error className="error" key={2}>
        {submitFailed ? error : ""}
      </Error>
    ];
  };

  renderTextInput = field => {
    return [
      <FormElement>
        <Text htmlFor={field.name} key={1}>
          <Label>{field.label}</Label>
          <TextInput id={field.name} type="text" {...field.input} />
        </Text>
      </FormElement>
    ];
  };
  onSubmit = values => {
    this.props.updateTopics(values);
  };
}

const validate = values => {
  const errors = {};
  if (_.isEmpty(values)) {
    errors.other =
      "Please pick at least one topic, choose 'Anything else' if you are unsure.";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "TopicForm"
})(connect(null, { updateTopics })(TopicForm));
