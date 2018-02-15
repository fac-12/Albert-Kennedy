import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";
import history from "../../history";
import styled from "styled-components";
import { fetchAvailibilites, updateAptTime } from "../../actions/appointment";
import Header from "../Header";
import SubmitButton from "../SubmitButton";

const Card = styled.label`
  width: 340px;
  height: 140px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 15px;
  border-left: solid 8px #fb8b24;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
		return <div>No appointments</div>;
	}

	renderForm() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				{_.map(this.props.availibility, time => (
					<Field
						name="datetime"
						type="radio"
						key={time}
						label={time[0] + " at " + time[1]}
						value={time[0] + " at " + time[1]}
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

<<<<<<< HEAD
  renderField(field) {
    return (
      <Card>
        <Input type="radio" {...field.input} />
        <Label>{field.label}</Label>
      </Card>
    );
  }
=======
	renderField(field) {
		return (
			<div>
				<label>{field.label}</label>
				<input type="radio" {...field.input} />
			</div>
		);
	}
>>>>>>> master

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
		updateAptTime
	})(ScheduleForm)
);
