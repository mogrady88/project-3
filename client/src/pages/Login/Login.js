import React, { Component } from "react";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SignInCard from "../../components/SignInCard";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSignUp(event) {
    event.preventDefault();
    console.log("handleSubmit");

    //request to server to add a new username/password
    axios
      .post("/api/users/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            // redirectTo: "/login"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }
  handleLogin(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/api/users/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          window.loggedIn = true;
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to private view
          this.setState({
            redirectTo: "/private"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="Container">
          <Row>
            <Col m={4} offset="m4">
              <Card className="signIn" title="Administrator Login">
                <form>
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
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Button onClick={this.handleLogin} type="submit">
                    {console.log("Props", this.props)}
                    Login
                  </Button>
                  <Button onClick={this.handleSignUp} type="submit">
                    Sign up
                  </Button>
                </form>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Login;
