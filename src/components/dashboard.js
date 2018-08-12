import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import Sidenav from "./sidenav";
import DashContent from "./dashcontent";
import "./dashboard.css";

import { fetchProtectedData } from "../actions/protected-data";

export class Dashboard extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <Sidenav />
        <div className="dashcontent">
          <DashContent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

// <h1>Success</h1>
// <div className="dashboard-username">
// Username: {this.props.username}
// </div>
// <div className="dashboard-name">Name: {this.props.name}</div>
// <div className="dashboard-protected-data">
// Protected data: {this.props.protectedData}
// </div>
