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

const Input = styled.input`
	display: none;

	&:checked + div {
		color: #f47a20;
	}
`;

const Card = styled.label`
	width: 160px;
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
	width: 100vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Error = styled.div`
	font-size: 0.8em;
	font-weight: 500;
	align-self: flex-start;
`;

const Form = styled.form`
	height: 70vh;
`;

class TopicForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="container__div">
				<Header heading="Let’s talk" text="Choose any that apply" />
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
