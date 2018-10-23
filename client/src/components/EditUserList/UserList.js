import React, { Component } from "react";
import Row from "../../components/grid/Row";
import Col from "../../components/grid/Col";



const UserList = props => {
    return(
        <div>
    <Row>
        <Col s={1}>
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" value={props.user.username} onChange={props.onChange} />
        </Col>
        <Col s={1}>
            <label for="password">Password</label>
            <input type="text" class="form-control" name="password" value="" placeholder="Enter new password" onChange={props.onChange} />
        </Col>
        <Col s={1}>
            <label for="firstname">Firstname</label>
            <input type="text" class="form-control" name="firstname" value={props.user.firstname} onChange={props.onChange} />
        </Col>
        <Col s={1}>
        <label for="lastname">Lastname</label>
        <input type="text" class="form-control" name="lastname" value={props.user.lastname} onChange={props.onChange} />
        </Col>
        <Col s={1}>
        <label for="email">Email</label>
        <input type="text" class="form-control" name="email" value={props.user.email} onChange={props.onChange} />
        </Col>
        <Col>
        <label for="disable">Active</label>
        <input type="text" class="form-control" name="disable" value={props.user.isActive} />
        </Col>
        
    </Row>
    <Row>
    <Col><button onClick={props.onClick} name="id" value={props.user._id}>Make Changes</button></Col>
    <Col><button onDelete={props.onDisable} name="id" value={props.user._id}>Disable User</button></Col>
    </Row>
</div>
)
};


export default UserList