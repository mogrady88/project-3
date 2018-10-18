import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import "./Nav.css";

<<<<<<< HEAD
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
          {/* {this.props.loggedIn ? ( */}
          <Link to="/private">Private view</Link>
          {/* ) : ( */}
          <Link to="/login">Admin Login</Link>
          {/* )} */}
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
=======
const Nav = props => (
  <nav>
    {props.isPublic ? (
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/private">Admin Login</Link>
          </li>
        </ul>
      </div>
    ) : (
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Logged in as <strong>{window.currentUser}</strong>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <button onClick={() => props.loadPage("users")}>Users</button>
          </li>
          <li>
            <button onClick={() => props.loadPage("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={props.handleLogout}>Log out</button>
          </li>
          <li>
            <Link to="/">Public View</Link>
          </li>
        </ul>
      </div>
    )}
  </nav>
);
>>>>>>> master

export default Nav;
