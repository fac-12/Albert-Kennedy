import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";
import history from "../../history";
import { connect } from "react-redux";
import { fetchMentors, updateMentor } from "../../actions/appointment";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import styled from "styled-components";

const Card = styled.label`
	width: 340px;
	height: 140px;
	border-radius: 10px;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
	margin: 15px;
	border-left: solid 8px #f47a20;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Input = styled.input`
	display: none;

	&:checked + div {
		color: #f47a20;
	}
`;

const Label = styled.div`
	width: 190px;
	margin: 0 0 10px 0;
	font-weight: bold;
`;

const Desc = styled.p`
	width: 190px;
	margin: 0;
	font-size: 0.9rem;
`;

const Img = styled.img`
	height: auto;
	width: 80px;
	padding: 5px;
`;

class MentorForm extends Component {
	componentDidMount() {
		if (!this.props.topics) {
			history.push("/topics");
		} else {
			this.props.fetchMentors();
		}
	}

	render() {
		if (!this.props.mentors) {
			return <div />;
		}
		const { handleSubmit } = this.props;

		return (
			<div>
				<Header heading="Choose a mentor to connect with" />
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					{_.map(this.props.mentors, mentor => (
						<Field
							name="mentor"
							type="radio"
							key={mentor.id}
							label={mentor.name}
							desc={mentor.description}
							img={mentor.img_url}
							value={mentor.name}
							component={this.renderField}
						/>
					))}
					<Field name="error" component={this.renderError} />
					<SubmitButton text="next" />
				</form>
			</div>
		);
	}

	renderField(field) {
		return (
			<Card>
				<div>
					<Img src={field.img} alt="Mentor" />
				</div>
				<Input type="radio" id={field.label} {...field.input} />
				<div>
					<Label>{field.label}</Label>
					<Desc>{field.desc}</Desc>
				</div>
			</Card>
		);
	}
	renderError(field) {
		const { meta: { error, submitFailed } } = field;
		return <div>{submitFailed ? error : ""}</div>;
	}
	onSubmit(values) {
		this.props.updateMentor(values);
	}
}

const validate = values => {
	const errors = {};
	if (_.isEmpty(values)) {
		errors.error = "Please choose a mentor to chat to.";
	}
	return errors;
};

const mapStateToProps = state => {
	return {
		mentors: state.mentors.mentor_list,
		topics: state.newApt.topics
	};
};

export default reduxForm({
	validate,
	form: "MentorForm"
})(connect(mapStateToProps, { updateMentor, fetchMentors })(MentorForm));
