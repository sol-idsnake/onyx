import React from "react";

import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchSingleBase } from "../actions/interaction";
import UserChat from "./userchat";

export class BasePage extends React.Component {
	componentDidMount() {
		const baseId = this.props.match.params.baseId;
		this.props.dispatch(fetchSingleBase(baseId));
	}

	render() {
		// const users =
		// 	this.props.currentBase &&
		// 	this.props.currentBase.userList.length !== undefined
		// 		? this.props.currentBase.userList.length
		// 		: 0;
		const title = this.props.currentBase ? (
			<h2>{this.props.currentBase.title}</h2>
		) : (
			<h2>Loading...</h2>
		);

		return (
			<div>
				{title}
				<h2>You currently have users assigned to this base</h2>
				<UserChat />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentBase: state.interaction.currentBase,
	loading: state.interaction.loading
});

export default requiresLogin()(connect(mapStateToProps)(BasePage));
