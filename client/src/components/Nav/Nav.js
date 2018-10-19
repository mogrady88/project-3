import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <nav id="topNav">
    {props.isPublic ? (
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/private">Admin Login</Link>
          </li>
        </ul>
      </div>
    ) : (
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logged in as <strong>{window.currentUser}</strong>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a onClick={() => props.loadPage("users")}>Users</a>
          </li>
          <li>
            <a onClick={() => props.loadPage("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={props.handleLogout}>Log out</a>
          </li>
          <li>
            <Link to="/">Public View</Link>
          </li>
        </ul>
      </div>
    )}
  </nav>
);

export default Nav;
