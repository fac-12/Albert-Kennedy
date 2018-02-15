import React, { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { fetchAppointments } from "../../actions/appointment";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";
import styled from "styled-components";

const Card = styled.div`
	width: 90vw;
	height: 25vh;
	border-radius: 10px;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
	margin: 10px;
	border-left: solid 8px #f47a20;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Img = styled.img`
	height: auto;
	width: 25vw;
	padding: 5px;
`;

const Button = styled.button`
	height: 4vh;
	border: solid 0.1em #f47a20;
	background-color: white;
	border-radius: 0.3rem;
`;

class Profile extends Component {
	render() {
		console.log(this.props.apts);
		if (!this.props.apts) {
			return <div>You have no appointments booked!</div>;
		} else {
			return (
				<div>
					<Header heading="My Appointments" logout />
					{this.props.apts.map(apt => {
						const dates = this.convertDates(apt.date_and_time);
						return (
							<Card>
								<div>
									<Img src={apt.img_url} />
								</div>
								<div>
									<p>{apt.name}</p>
									<p>{dates[0]}</p>
									<p>{dates[1]}</p>
									<Button>please log in at your scheduled time</Button>
								</div>
							</Card>
						);
					})}
					<LinkButton text="new appointment" url="/topics" primary />

					<p>
						Immediate crisis? Don't use this site -{" "}
						<Link to="/crisis">use these resources instead</Link>
					</p>
				</div>
			);
		}
	}

	componentDidMount() {
		this.props.fetchAppointments();
	}

	convertDates = date => {
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
		const dateObj = new Date(date);
		const dateStr = dateObj.toLocaleString("en-gb", dateOptions);
		const timeStr = dateObj.toLocaleString("en-gb", timeOptions);
		return [dateStr, timeStr];
	};
}

const mapStateToProps = state => {
	return {
		apts: state.userApts.apts
	};
};

export default connect(mapStateToProps, { fetchAppointments })(Profile);
