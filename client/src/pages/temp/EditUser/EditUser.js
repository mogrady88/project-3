import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/shared/Nav";
import axios from "axios";
import UsersAPI from "../../../utils/usersAPI";
import UserList from "../../../components/private/EditUserTable/UserTable";
// import "./Login.css";

class Signup extends Component {
  state = {
    users: [
      {
        username: "matt",
        password: "123",
        firstname: "matthew",
        lastname: "ogrady",
        email: "mrogrady@att.net"
      },
      {
        username: "bob",
        password: "321",
        firstname: "bob",
        lastname: "wilson",
        email: "bob@bob.bob"
      }
    ],
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: ""
  };

  handleUsernameChange = event => {
    const value = event.target.value;
    this.setState({
      username: value
    });
    console.log(this.state);
  };
  handlePasswordChange = event => {
    const value = event.target.value;
    this.setState({
      password: value
    });
    console.log(this.state);
  };
  handleFirstnameChange = event => {
    const value = event.target.value;
    this.setState({
      firstname: value
    });
    console.log(this.state);
  };

  handleLastnameChange = event => {
    const value = event.target.value;
    this.setState({
      lastname: value
    });
    console.log(this.state);
  };
  handleEmailChange = event => {
    const value = event.target.value;
    this.setState({
      email: value
    });
    console.log(this.state);
  };

  // componentDidMount(){
  //     UsersAPI.getAllUsers()
  //     .then(res => this.setState({
  //         users: res.data
  //     })
  //     )
  //     .catch(err => console.log(err));
  //     console.log(this.state.users);
  //     }

  render() {
    return (
      <div classname="container">
        <Nav isPublic={true} />
        <Row>
          <h4>Users</h4>
          <div>
            {this.state.users.map(user => (
              <UserList user={user} />
            ))}
            {/* <Col s={2}>
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Username" name="username" onChange={this.handleUsernameChange} value={this.state.username} />
                </Col>

                <Col s={2}>
                <label for="password"><b>Password</b></label>
                <input type="text" placeholder="Password" name="password" onChange={this.handlePasswordChange} value={this.state.password} />
                </Col>

                <Col s={2}>
                <label for="first-name"><b>Firstname</b></label>
                <input type="text" placeholder="Firstname" name="firstname" onChange={this.handleFirstnameChange} value={this.state.firstname} />
                </Col>

                <Col s={2}>
                <label for="last-name"><b>Lastname</b></label>
                <input type="text" placeholder="Lastname" name="lastname" onChange={this.handleLastnameChange} value={this.state.lastname} />
                </Col>

                <Col s={2}>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Email" name="email" onChange={this.handleEmailChange} value={this.state.email} />
                </Col>

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Set Changes</button>
                </div> */}
          </div>
        </Row>
      </div>
    );
  }
}

export default Signup;
