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
		// add to also remove all BaseUsers upon delete
		this.props.dispatch(removeBase(id));
	}

	render() {
		const baseList = this.props.bases.map(base => (
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
