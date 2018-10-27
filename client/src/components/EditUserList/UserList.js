import React, { Component } from "react";
import Row from "../../components/shared/grid/Row";
import Col from "../../components/shared/grid/Col";
import UsersAPI from "../../utils/usersAPI";
import "./UserList.css";

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

    handleActiveChange = event => {
      console.log(event.target.value);
    }

    onDisable = (event) => {
      console.log("on disable");
      this.setState({ user: {
        isActive: false }})
      console.log(this.state.user);
    //   const { name, value } = event.target;
    //   event.preventDefault();
    //   this.setState({ user: {
    //       ...this.state.user,
    //       [name]: value
    //   }
    // })
    //   this.updateUserInfo(event.target.value, this.state.user)
    }

  render() {
    return (
      <div className="userList">
        <Row>
          <Col s={1}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.user.username}
              onChange={this.onChange}
            />
          </Col>
          <Col s={1}>
            <label htmlFor="password">Password</label>
            <input 
                type="text"
                className="form-control"
                name="password"
                placeholder="Enter new password"
                onChange={this.onChange}
            />
        </Col>
        <Col s={1}>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={this.state.user.firstName}
              onChange={this.onChange}
            />
          </Col>
          </Row>
          <Row>
          <Col s={1}>
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={this.state.user.lastName}
              onChange={this.onChange}
            />
          </Col>
          <Col s={1}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.user.email}
              onChange={this.onChange}
            />
          </Col>
          <Col s={1}>
            <input
              type="radio"
              name="disable"
              value= { false }
              checked = { this.state.user.isActive === true }
              readOnly= { true }
              />
            <label htmlFor="disable">Active</label>
          </Col>
          </Row>
          <Row>
          <Col>
            <button 
              className="btn"
              onClick={this.onClick}
              name="id"
              value={this.props.user._id}
            >
              Make Changes
            </button>
          </Col>
          <Col>
            <button 
              className="btn"
              onClick={this.onDisable}
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
