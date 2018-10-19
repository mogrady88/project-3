import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";
import axios from "axios";
import UsersAPI from "../../utils/usersAPI";
import UserList from "../../components/EditUserList/UserList";
// import "./Login.css";

class ViewUsers extends Component {

state = {
        users: [{
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
        }],
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

componentDidMount(){
    UsersAPI.getAllUsers()
    .then(res => {
        this.setState({ users: res.data })
    })
    .catch(err => console.log(err));
    }

updateUserInfo(){
    UsersAPI.
}

handleOnDelete = (event) => {
    event.preventDefault();

    }

handleOnChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

handleOnClick = (event) => {
    event.preventDefault();

    }


    render(){
        return(
            <div className="container">
            <Nav isPublic={true} />
            <Row>
                <h4>Users</h4>
                <div>
                <Row>
                    <Col s={2}><h5>Username</h5></Col>
                    <Col s={2}><h5>Password</h5></Col>
                    <Col s={2}><h5>Firstname</h5></Col>
                    <Col s={2}><h5>Lastname</h5></Col>
                    <Col s={2}><h5>Email</h5></Col>
                </Row>
                {this.state.users.map(user => (
                <UserList user={user} onDelete={this.handleOnDelete} onChange={this.handleOnChange} onClick={this.handleOnClick}/>
                ))}
                </div>
            </Row>
            </div>
        )
    }
}

export default ViewUsers;
