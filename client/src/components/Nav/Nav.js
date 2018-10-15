import React from "react";
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
    const loggedIn = this.props.loggedIn;
    if (this.props.isPublic) {
      return (
        <Navbar className="Nav" brand="logo" right>
          <NavItem href="/">About</NavItem>
          <NavItem href="/login">Admin Login</NavItem>
        </Navbar>
      );
    } else {
      return (
        <Navbar className="Nav" brand="logo" right>
          <NavItem href="/">Public View</NavItem>
          <p>
            Logged in as <strong>{window.currentUser}</strong>
          </p>
          <Button onClick={this.props.handleLogout}>Log out</Button>
        </Navbar>
      );
    }
  }
}

export default Nav;
