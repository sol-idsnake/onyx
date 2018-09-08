import React from "react";

import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchSingleBase } from "../actions/interaction";
import UserList from "./userlist";
import MessageList from "./messagelist";
import Loader from "../img/doubleRing.svg";
import "./basepage.css";

export class BasePage extends React.Component {
	componentDidMount() {
		const baseId = this.props.match.params.baseId;
		const access_token = this.props.auth;
		if (this.props.match.params.baseId) {
			this.props.dispatch(fetchSingleBase(baseId, access_token));
		}
	}

	creator() {
		let creator = this.props.location.search;
		return creator;
	}

	render() {
		const title = this.props.currentBase ? (
			<div className="baseHeader">
				<span>
					You currently have {this.props.currentBase.users.length} users
					assigned to
					<span className="baseTitle">{this.props.currentBase.base.title}</span>
					base.
				</span>
			</div>
		) : (
			<img src={Loader} alt="Loading..." />
		);

		let baseId;
		if (this.props.match) {
			baseId = this.props.match.params.baseId;
		}

		return (
			<div className="basepage">
				{title}
				<UserList baseId={baseId} />
				<MessageList baseId={baseId} />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	loading: state.interaction.loading,
	auth: state.auth.authToken,
	currentBase: state.interaction.currentBase
});

export default requiresLogin()(connect(mapStateToProps)(BasePage));
