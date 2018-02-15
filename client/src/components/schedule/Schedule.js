import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";
import history from "../../history";
import styled from "styled-components";
import { fetchAvailibilites, updateAptTime } from "../../actions/appointment";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import { Link } from "react-router-dom";

const Card = styled.label`
  width: 340px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 15px;
  border-left: solid 8px #fb8b24;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NoAptsCard = styled.div`
  width: 340px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 15px;
  display: flex;
  align-items: center;
`;

const TextWrap = styled.div`
  padding: 20px;
`;

const Input = styled.input`
  display: none;

  &:checked + div {
    color: #fb8b24;
  }
`;

const Label = styled.div``;

const Img = styled.img`
  height: auto;
  width: 50px;
  padding: 5px;
`;

class ScheduleForm extends Component {
  render() {
    if (!this.props.availibility) {
      return <div />;
    } else {
      return (
        <div>
          <Header heading="Schedule an appointment" />
          {this.props.availibility === "none"
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
    const dates = this.convertDates(this.props.availibility);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {_.map(dates, datetime => (
          <Field
            name="datetime"
            type="radio"
            key={datetime}
            label={datetime[0] + " at " + datetime[1]}
            value={datetime[0] + " at " + datetime[1]}
            component={this.renderField}
          />
        ))}
        <Field name="error" component={this.renderError} />
        <SubmitButton text="next" />
      </form>
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

  convertDates = dateArr => {
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };

    let dates = dateArr.map(date => {
      const ymd = date[0]
        .split("/")
        .slice(2)
        .concat(date[0].split("/").slice(0, 2));
      const time = date[1].slice(0, -3);
      const datetime = new Date(ymd.concat([","]).concat(time));
      const dateStr = datetime.toLocaleString("en-gb", dateOptions);
      const timeStr = datetime.toLocaleString("en-gb", timeOptions);
      return [dateStr, timeStr];
    });

    return dates;
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
    updateAptTime
  })(ScheduleForm)
);
