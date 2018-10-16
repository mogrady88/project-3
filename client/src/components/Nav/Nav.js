import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import UsersAPI from "../../utils/usersAPI";
import { Navbar, NavItem, Button } from "react-materialize";
import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log("Public: " + this.props.isPublic);
  }

  render() {
    if (this.props.isPublic) {
      return (
        <Navbar className="Nav" brand="logo" right>
          <Link to="/">Home</Link>
          <Link to="/private">Admin Login</Link>
        </Navbar>
      );
    } else {
      return (
        <Navbar className="Nav" brand="logo" right>
          <Link to="/">Public View</Link>
          <p>
            Logged in as <strong>{window.currentUser}</strong>
          </p>
          <Button onClick={this.props.handleLogout}>Log out</Button>
          <Button onClick={this.props.showHideUserCreate}>Add new user</Button>
        </Navbar>
      );
    }
  }
}

export default Nav;
