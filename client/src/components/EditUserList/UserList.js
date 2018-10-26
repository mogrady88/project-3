import React, { Component } from "react";
import Row from "../../components/shared/grid/Row";
import Col from "../../components/shared/grid/Col";
import UsersAPI from "../../utils/usersAPI";

class UserList extends Component {

constructor(props){
    super(props);

    this.state = {
        user: {}
        }
        this.componentWillMount = this.componentWillMount.bind(this);
        this.onClick = this.onClick.bind(this);
}

    componentWillMount() {
        this.setState({ user: this.props.user })
        console.log(this.props.user);
    }

    updateUserInfo(id, data){
        console.log("updateuser");
        UsersAPI.updateUser(id, data)
        .then(res => 
            console.log("update user response " + JSON.stringify(res.data))
        )
    }

    onClick = (event) => {
        console.log("onclick");
        event.preventDefault();
        this.updateUserInfo(event.target.value, this.state.user);
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
    }

    // onDisable = (event) => {
    //     event.preventDefault();
    //     this.setState({ user})
    //     this.updateUserInfo(event.target.value, this.state.use)
    // }

render() {
    return(
        <div>
    <Row>
        <Col s={1}>
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" value={this.state.user.username} onChange={this.onChange} />
        </Col>
        <Col s={1}>
            <label for="password">Password</label>
            <input type="text" class="form-control" name="password" value="" placeholder="Enter new password" onChange={this.onChange} />
        </Col>
        <Col s={1}>
            <label for="firstname">Firstname</label>
            <input type="text" class="form-control" name="firstName" value={this.state.user.firstName} onChange={this.onChange} />
        </Col>
        <Col s={1}>
            <label for="lastname">Lastname</label>
            <input type="text" class="form-control" name="lastName" value={this.state.user.lastName} onChange={this.onChange} />
        </Col>
        <Col s={1}>
            <label for="email">Email</label>
            <input type="text" class="form-control" name="email" value={this.state.user.email} onChange={this.onChange} />
        </Col>
        <Col s={1}>
            <label for="disable">Active</label>
            <input type="radio" class="form-control" name="disable" value={this.state.user.isActive} />Active
        </Col> 
    </Row>
    <Row>
    <Col><button onClick={this.onClick} name="id" value={this.props.user._id}>Make Changes</button></Col>
    <Col><button onDisable={this.onDisable} name="id" value={this.props.user._id}>Disable User</button></Col>
    </Row>
</div>
)
}
}


export default UserList