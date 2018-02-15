import React, { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { fetchAppointments } from "../../actions/appointment";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";
import styled from "styled-components";

class Profile extends Component {
	render() {
		if (!this.props.apts) {
			return <div>You have no appointments booked!</div>;
		} else {
			return (
				<div>
					<Header heading="My Appointments" logout />
					{this.props.apts.map(apt => {
						return (
							<div>
								<p>With {apt.name}</p>
								<p>on {apt.date_and_time}</p>
								<LinkButton text="please log in at your appointed time" />
							</div>
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
}

const mapStateToProps = state => {
	return {
		apts: state.userApts.apts
	};
};

export default connect(mapStateToProps, { fetchAppointments })(Profile);
