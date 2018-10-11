import React, { Component } from "react";
import API from "../../utils/API";
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    // axios
    //   .get("/api/users/")
    //   .then(response => {
    //     console.log("Users:", response);
    //   })
    //   .catch(error => {
    //     console.log("login error: ");
    //     console.log(error);
    //   });

    axios
      .post("/api/users/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
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
              <Card className="signIn" title="Administrator Sign-In">
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
                  <Button onClick={this.handleSubmit} type="submit">
                    Sign In
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
