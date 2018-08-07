import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import './navbar.css'
import LogoImg from '../img/logo.png'

export const Navbar = props => {
  let links
  if (!props.loggedIn) {
    links = props.sidebarNotAuth.map(link => (
      <li key={link.value}>
        <Link to={link.path}>{link.title}</Link>
      </li>
    ))
  } else {
    links = props.sidebarAuth.map(link => (
      <li key={link.value}>
        <Link to={link.path}>{link.title}</Link>
      </li>
    ));
  } 
  return (
    <header>
      <Link to="/"><img src={LogoImg} alt="Onyx Logo" className="logoWithoutText"/></Link>
      <ul>{links}</ul>
    </header>
  );
};

export const mapStateToProps = (state) => ({
  sidebarAuth: state.initialReducer.sidebarAuth,
  sidebarNotAuth: state.initialReducer.sidebarNotAuth,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);