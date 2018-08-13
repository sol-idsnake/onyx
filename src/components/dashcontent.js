import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import AddBase from "./addbase";
import "./dashcontent.css";
import { Link } from "react-router-dom";
import { fetchBases, addBaseToDb, removeBase } from "../actions/interaction";

export class DashContent extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchBases());
	}

	addBase(title) {
		this.props.dispatch(addBaseToDb(this.props.userId, title));
	}

	deleteBase(title) {
		this.props.dispatch(removeBase(title));
	}

	render() {
		const baseList = this.props.bases.map(base => (
			<li key={base.title} className="base">
				<Link to={base.title}>{base.title}</Link>
				<i className="fas fa-times" onClick={() => this.deleteBase(base.title)} />
			</li>
		));

		return (
			<ul className="baseWrapper">
				{baseList}
				<li className="add-list-wrapper">
					<AddBase type="base" onAdd={title => this.addBase(title)} />
				</li>
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	bases: state.interaction.bases,
	userId: state.auth.currentUser.userId,
});

export default requiresLogin()(connect(mapStateToProps)(DashContent));
//

// <small>
// 	Admins in this base: {base.admins !== null ? base.admins : 0}
// </small>
// <small>
// 	Messages in this base: {base.messages !== null ? base.messages : 0}
// </small>

// <small>Users in this base: {users !== null ? base.users : 0}</small>
