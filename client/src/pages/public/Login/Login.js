import React, { Component } from "react";
// import API from "../../utils/API";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/shared/Nav";
import UsersAPI from "../../../utils/usersAPI";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
      userExists: true
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.checkForUsers = this.checkForUsers.bind(this);
  }

  componentWillMount() {
    this.checkForUsers();
  }

  checkForUsers() {
    UsersAPI.checkForUsers().then(response => {
      if (response.data.length === 0) {
        console.log("Checking if user exists: ", response);
        this.setState({ userExists: false });
        console.log("Does a user exist? ", this.state.userExists);
      } else {
        console.log("Checking if user exists: ", response);
        this.setState({ userExists: true });
        console.log("Does a user exist? ", this.state.userExists);
      }
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSignUp(event) {
    event.preventDefault();
    console.log("handleSignUp");
    UsersAPI.signupUser({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log("successful signup");
          alert(`Successful signup for new user: ${response.data.username}.`);
          this.setState({
            username: "",
            password: ""
          });
          this.checkForUsers();
        } else {
          console.log("username already taken");
          alert(response.data.error);
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }
  handleLogin(event) {
    event.preventDefault();
    console.log("handleLogin");

    UsersAPI.loginUser({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        document.getElementById("loginForm").reset();
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          window.loggedIn = true;
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          window.currentUser = this.state.username;
          console.log("Login.js Setting currentUser:", window.currentUser);
          // update the state to redirect to private view
          this.setState({
            redirectTo: "/private"
          });
          console.log(
            "Login.js this.state.redirectTo: " + this.state.redirectTo
          );
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
        alert("Incorrect username or password");
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="Container">
          <Nav isPublic={true} />
          <Row>
            <Col size="4" />
            <Col size="4">
              <div className="signIn">
                <h4>Administrator Login</h4>
                <form id="loginForm">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <button id="btn1" onClick={this.handleLogin} type="submit">
                    {console.log("Props", this.props)}
                    Login
                  </button>
                  {this.state.userExists ? (
                    " "
                  ) : (
                    <button
                      id="btn2"
                      disabled={!(this.state.username && this.state.password)}
                      onClick={this.handleSignUp}
                      type="submit"
                    >
                      Sign up
                    </button>
                  )}
                </form>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Login;