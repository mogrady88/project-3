import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";

class Nav extends React.Component {
  componentDidMount() {
    console.log(this.props.isPublic);
  }

  render() {
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
          <h4>Logged in as {window.currentUser}</h4>
        </Navbar>
      );
    }
  }
}

export default Nav;
