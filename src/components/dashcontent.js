import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import AddBase from "./addbase";
import ForeignBases from "./foreignbases";
import "./dashcontent.css";
import { Link } from "react-router-dom";
import {
	fetchBases,
	addBaseToDb,
	removeBase,
	fetchUsersOfList
} from "../actions/interaction";

export class DashContent extends React.Component {
	componentDidMount() {
		const userId = this.props.userId;
		this.props.dispatch(fetchBases(userId));
	}

	addBase(title) {
		this.props.dispatch(addBaseToDb(this.props.userId, title));
	}

	deleteBase(id) {
		// add to also remove all BaseUsers upon delete
		this.props.dispatch(removeBase(id));
	}

	render() {
		let baseList = [];
		for (let key of this.props.bases) {
			if (key.creatorId === this.props.userId) {
				baseList.push(key);
			}
		}

		const baseMap = baseList.map(base => (
			<li key={base.id} className="base">
				<Link to={`/user-message/${base.id}`}>{base.title}</Link>
				<p>
					Current Users:
					<Link to={`/user-message/${base.id}`} />
				</p>
				<p>
					Current Messages:
					<Link to={`/user-message/${base.id}`} />
				</p>
				<i className="fas fa-times" onClick={() => this.deleteBase(base.id)} />
			</li>
		));

		return (
			<ul className="baseWrapper">
				<p>My Bases:</p>
				<li className="base add-list-wrapper">
					<AddBase type="base" onAdd={title => this.addBase(title)} />
				</li>
				{baseMap}
				<p>Bases I was added to:</p>
				<ForeignBases />
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	bases: state.interaction.bases,
	userId: state.auth.currentUser.userId
});

export default requiresLogin()(connect(mapStateToProps)(DashContent));
