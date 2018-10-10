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
        </Navbar>
      );
    }
  }
}

export default Nav;
