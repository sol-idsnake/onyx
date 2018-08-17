import React from "react";

import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchUsers } from "../actions/interaction";

export class BasePage extends React.Component {
	componentDidMount() {
		const baseId = this.props.match.params.baseId;
		this.props.dispatch(fetchUsers(baseId));
	}

	render() {
		return (
			<div>
				<h2>You have currently users assigned to this base</h2>
			</div>
		);
	}
}

// const mapStateToProps = ({
// 	users:
// })

export default requiresLogin()(connect()(BasePage));
