import React from "react";

import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchSingleBase } from "../actions/interaction";
import UserList from "./userlist";
import Loader from "../img/doubleRing.svg";

export class BasePage extends React.Component {
	componentDidMount() {
		const baseId = this.props.match.params.baseId;
		this.props.dispatch(fetchSingleBase(baseId));
	}
	render() {
		const title = this.props.currentBase ? (
			<h2>{this.props.currentBase.title}</h2>
		) : (
			<img src={Loader} />
		);

		return (
			<div>
				{title}
				<h2>You currently have users assigned to this base</h2>
				<UserList baseId={this.props.match.params.baseId} />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	loading: state.interaction.loading,
	currentBase: state.interaction.currentBase
});

export default requiresLogin()(connect(mapStateToProps)(BasePage));
