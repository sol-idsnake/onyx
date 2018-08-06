import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import './navbar.css'
import LogoImg from '../img/logo.png'

export const Navbar = props => {
  const links = props.sidebar.map(link => (
    <li key={link.value}>
    	<Link to={link.path}>{link.title}</Link>
    </li>

  ));
  return (
    <header>
    	<img src={LogoImg} alt="Onyx Logo" className="logoWithoutText"/>
      <ul>{links}</ul>
    </header>
  );
};

export const mapStateToProps = (state, props) => ({
  sidebar: state.sidebar
});

export default connect(mapStateToProps)(Navbar);
