import React, { Component } from "react";
import Row from "../../components/shared/grid/Row";
import Col from "../../components/shared/grid/Col";
import UsersAPI from "../../utils/usersAPI";
import PasswordMask from 'react-password-mask';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.setState({ user: this.props.user });
    console.log(this.props.user);
  }

  updateUserInfo(id, data) {
    console.log("updateuser");
    UsersAPI.updateUser(id, data).then(res => {
      console.log("update user response " + JSON.stringify(res.data));
      if (!res.data.error) {
        console.log("successful signup");
        alert(`Successfully updated user: ${res.data.username}.`);
      } else {
        console.log("Username already taken");
        alert(res.data.error);
      }
    });
  }

    onClick = (event) => {
        console.log("onclick");
        event.preventDefault();
        const username = this.state.user.username.trim();
        const pswd = this.state.user.password;

        if (!username || !pswd){
            alert("Please enter a valid username and password");
        }else{
        this.updateUserInfo(event.target.value, this.state.user);
        }
    }

    onChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            user: {
                ...this.state.user,
            [name]: value
            }   
        })
        console.log(this.state.user);
    }

  // onDisable = (event) => {
  //     event.preventDefault();
  //     this.setState({ user})
  //     this.updateUserInfo(event.target.value, this.state.use)
  // }

  render() {
    return (
      <div>
        <Row>
          <Col s={1}>
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              name="username"
              value={this.state.user.username}
              onChange={this.onChange}
            />
          </Col>
          <Col s={1}>
            <label for="password">Password</label>
            {/* <PasswordMask
                id="password"
                name="password"
                placeholder="Enter password"
                value={this.state.user.password}
                onChange={this.onChange.bind(this)}
            /> */}
            <input 
                type="text"
                class="form-control"
                name="password"
                placeholder="Enter new password"
                onChange={this.onChange}
            />
        </Col>
        <Col s={1}>
            <label for="firstname">Firstname</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              value={this.state.user.firstName}
              onChange={this.onChange}
            />
          </Col>
          <Col s={1}>
            <label for="lastname">Lastname</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              value={this.state.user.lastName}
              onChange={this.onChange}
            />
          </Col>
          <Col s={1}>
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              name="email"
              value={this.state.user.email}
              onChange={this.onChange}
            />
          </Col>
          <Col s={1}>
            <label for="disable">Active</label>
            <input
              type="radio"
              class="form-control"
              name="disable"
              value={this.state.user.isActive}
            />
            Active
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              onClick={this.onClick}
              name="id"
              value={this.props.user._id}
            >
              Make Changes
            </button>
          </Col>
          <Col>
            <button
              onDelete={this.onDisable}
              name="id"
              value={this.props.user._id}
            >
              Disable User
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserList;
