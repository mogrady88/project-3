import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <Navbar className="publicNav" brand="logo" right>
        <NavItem onClick={() => console.log("test click")}>
          Getting started
        </NavItem>
        <NavItem href="components.html">Components</NavItem>
      </Navbar>
    );
  }
}

export default Nav;
