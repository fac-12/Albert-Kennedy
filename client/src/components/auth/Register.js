import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, resetError } from "../../actions/auth";
import Header from "../Header";
import SubmitButton from "../SubmitButton";
import styled from "styled-components";

const FormElement = styled.div`
	height: 10vh;
	padding: 0 10vw 0 10vw;
`;

const Input = styled.input`
	height: 5vh;
	width: 80vw;
	box-shadow: none;
	border-top: none;
	border-left: none;
	border-right: none;
	::placeholder {
		color: black;
	}

	&:focus {
		-webkit-appearance: none;
		outline: none;
	}
`;

const Error = styled.p`
	margin: 0;
	width: 90vw;
	color: #fb8b24;
	line-height: 5vh;
	font-size: 0.75em;
`;

const Register = styled.p`
	width: 100vw;
	text-align: center;
	margin-top: 0;
`;

class RegisterForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		const text = `Your contact details will be kept private and will not be shared with your mentor.`;
		return (
			<div className="container__div">
				<Header heading="Please fill in your details" text={text} />
				<Register>
					Returning user? <Link to="/signin">Log in</Link>
				</Register>

				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<Field
						name="name"
						type="text"
						label="Name"
						placeholder="Name"
						component={this.renderField}
					/>
					<Field
						name="email"
						type="email"
						label="Email"
						placeholder="Email"
						component={this.renderField}
					/>
					<Field
						name="dob"
						type="date"
						label="Date of Birth"
						placeholder="Date of birth"
						component={this.renderField}
					/>
					<Field
						name="postcode"
						type="text"
						label="Postcode"
						placeholder="Postcode"
						component={this.renderField}
					/>
					<Field
						name="gender"
						type="text"
						label="Gender"
						placeholder="Gender"
						component={this.renderField}
					/>
					<Field
						name="sexuality"
						type="text"
						label="Sexuality"
						placeholder="Sexuality"
						component={this.renderField}
					/>
					<Field
						name="password"
						type="password"
						label="Password"
						placeholder="Password"
						component={this.renderField}
					/>
					<Field
						name="confirmPassword"
						type="password"
						label="Confirm password"
						placeholder="Confirm password"
						component={this.renderField}
					/>
					<p>{this.renderAlert()}</p>
					<SubmitButton text="next" />
				</form>
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
	newApt: state.newApt
});

const validate = values => {
	const errors = {};
	if (!values.name) errors.name = "Enter your name";
	if (!values.email) errors.email = "Enter an email";
	if (!values.dob) errors.dob = "Enter your date of birth";
	if (!values.postcode) errors.postcode = "Enter a postcode";
	if (!values.password) errors.password = "Enter your password";
	if (values.password !== values.confirmPassword)
		errors.confirmPassword = "Passwords do not match";
	if (!values.confirmPassword)
		errors.confirmPassword = "Enter your password again";
	return errors;
};

export default reduxForm({
	validate,
	form: "RegisterForm"
})(connect(mapStateToProps, { registerUser, resetError })(RegisterForm));
