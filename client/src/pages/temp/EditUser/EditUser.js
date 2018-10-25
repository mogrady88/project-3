import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/shared/Nav";
import axios from "axios";
import UsersAPI from "../../../utils/usersAPI";
import UserList from "../../../components/EditUserList/UserList";

class ViewUsers extends Component {

state = {
        users: [],
        user: {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        }
}

componentDidMount(){
    UsersAPI.getAllUsers()
    .then(res => {
        this.setState({ users: res.data })
    })
    .catch(err => console.log(err));
    }

loadUsers(){
    UsersAPI.getAllUsers()
    .then(res => {
        this.setState({ users: res.data })
    })
    .catch(err => console.log(err));
    }


updateUserInfo(id, data){
    UsersAPI.updateUser(id, data)
    .then(res => 
        console.log(res.data)
    )
}

handleOnDisable = (event) => {
    event.preventDefault();

    }

handleOnChange = (event) => {
  
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
    })
}

    handleOnClick = (event) => {
        console.log(event.target);
        event.preventDefault();
        const userID = event.target.value;
        console.log(userID);
        this.updateUserInfo(userID, this.state.user);
  
    };


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
                <UserList user={user} onDisable={this.handleOnDisable} onChange={this.handleOnChange} onClick={this.handleOnClick}/>
                ))}
                </div>
            </Row>
            </div>
        )
    }
}

export default ViewUsers;
