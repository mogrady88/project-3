import React, { Component } from "react";
import Row from "../../components/grid/Row";
import Col from "../../components/grid/Col";



const UserList = props => {

    // const userField = {
    //     username: props.user.username, 
    //     password: props.user.password, 
    //     firstname: props.user.firstname,
    //     lastname: props.user.lastname,
    //     email: props.user.email, 
    //     id: props.user.id
    // }

    return(
        <div>
    <Row>
        {/* {userField.map((user, i) => {
            return(
            <Col s={1}><input type="text" class="form-control" value={user.value} onChange={props.onChange} name={user.key}/></Col>
            )
        })} */}

        <Col s={1}>
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" value={props.user.username} onChange={props.onChange} />
        </Col>
        <Col s={1}>
            <label for="password">Password</label>
            <input type="text" class="form-control" name="password" value={props.user.password} onChange={props.onChange} />
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
        
    </Row>
    <Row>
    <Col><button onClick={props.onClick} name={props.user.id}>Make Changes</button></Col>
    <Col><button onDelete={props.onDelete} name={props.user.id}>Delete User</button></Col>
    </Row>
</div>
)
};


export default UserList