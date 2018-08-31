import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import Sidenav from "./sidenav";
import MyBases from "./mybases";
import ForeignBases from "./foreignbases";
import "./dashboard.css";

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Sidenav />
        <div className="myBaseHeader">
          <h4>My Bases</h4>
        </div>
        <MyBases />
        <div className="foreignBaseHeader">
          <h4>Bases I am part of</h4>
        </div>
        <ForeignBases />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
