import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateTopics } from "../../actions/appointment";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import _ from "lodash";
import styled from "styled-components";

import bullying from "../../assets/bullying.png";
import comingout from "../../assets/comingout.png";
import housing from "../../assets/house.png";
import other from "../../assets/other.png";
import skills from "../../assets/skills.png";
import wellbeing from "../../assets/wellbeing.png";

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

const Text = styled.label`
	width: 90vw;
	font-size: 16px;
	padding-top: 5px;
	padding-bottom: 5px;
`;

const TextInput = styled.input`
	display: block;
	width: 330px;
	margin: auto;
	height: 40px;
	box-sizing: border-box;
	border-radius: 5px;
	-webkit-appearance: none;
	padding-left: 5px;
	autocomplete: off;
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
						<Field 
							name="info"
							label="Share any further information or other things you'd like to talk about here:"
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
			<Text htmlFor={field.name} key={1}>
				<Label>{field.label}</Label>
				<TextInput id={field.name} type="text" {...field.input} />
			</Text>
		];
	}
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
