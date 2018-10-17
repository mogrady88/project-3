import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";
import axios from "axios";
import UsersAPI from "../../utils/usersAPI";
// import "./Login.css";

class Signup extends Component {

state = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: ""
}

handleUsernameChange = (event) => {
    const value = event.target.value;
    this.setState({
        username: value
    });
    console.log(this.state)
}
handlePasswordChange = (event) => {
    const value = event.target.value;
    this.setState({
        password: value
    });
    console.log(this.state)
}
handleFirstnameChange = event => {
    const value = event.target.value;
    this.setState({
      firstname: value
    });
    console.log(this.state)
}

handleLastnameChange = (event) => {
    const value = event.target.value;
    this.setState({
        lastname: value
    });
    console.log(this.state)
}
handleEmailChange = (event) => {
    const value = event.target.value;
    this.setState({
        email: value
    });
    console.log(this.state)
}

    render(){
        return(
            <div classname="container">
            <Nav isPublic={true} />
            <Row>
                <Col s={4}>
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Username" name="username" onChange={this.handleUsernameChange} value={this.state.username} />

                <label for="password"><b>Password</b></label>
                <input type="text" placeholder="Password" name="password" onChange={this.handlePasswordChange} value={this.state.password} />
                
                <label for="first-name"><b>Firstname</b></label>
                <input type="text" placeholder="Firstname" name="firstname" onChange={this.handleFirstnameChange} value={this.state.firstname} />

                <label for="last-name"><b>Lastname</b></label>
                <input type="text" placeholder="Lastname" name="lastname" onChange={this.handleLastnameChange} value={this.state.lastname} />

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Email" name="email" onChange={this.handleEmailChange} value={this.state.email} />

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                </div>
                </Col>
            </Row>
            </div>
        )
    }
}

export default Signup;
