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

	deleteBase(id) {
		this.props.dispatch(removeBase(id));
	}

	render() {
		const baseList = this.props.bases.map(base => (
			<li key={base.id} className="base">
				<Link to={`/basepage/${base.title}`}>{base.title}</Link>
				<p>
					Current Users:
					<Link to={`/addUser/${base.id}`}>
						{base.currentUsers === 0 ? "Add users" : base.currentUsers}
					</Link>
				</p>
				<p>
					Current Messages:
					<Link to={`/messages/${base.id}`}>
						{base.messages === 0 ? "Post a message" : base.messages}
					</Link>
				</p>
				<i className="fas fa-times" onClick={() => this.deleteBase(base.id)} />
			</li>
		));

		return (
			<ul className="baseWrapper">
				<li className="base add-list-wrapper">
					<AddBase type="base" onAdd={title => this.addBase(title)} />
				</li>
				{baseList}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	bases: state.interaction.bases,
	userId: state.auth.currentUser.userId
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
