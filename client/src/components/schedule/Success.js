import React, { Component } from "react";
import Header from "../Header";
import LinkButton from "../LinkButton";
import { connect } from "react-redux";

class Success extends Component {
	render() {
		console.log(this.props.newApt);
		return (
			<div>
				<Header heading="Success!" />
				<p>
					You have booked the following appointment with <span />
					{this.props.newApt.mentor} on {this.props.newApt.aptTime.datetime}
				</p>
				<p>Log back in to the site then for your chat. </p>
				<p>In the meantime, click done to see your profile.</p>
				<LinkButton text="done" url="/profile" />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		newApt: state.newApt
	};
};

export default connect(mapStateToProps)(Success);
