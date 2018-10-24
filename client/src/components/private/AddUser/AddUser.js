import React from "react";
import Col from "../../shared/grid/Col";

const AddUser = props => (
  <Col size="9">
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name (required)"
        value={props.newFirstName}
        data-context="newUser"
        onChange={props.handleInputChange}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name (required)"
        value={props.newLastName}
        data-context="newUser"
        onChange={props.handleInputChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email (optional)"
        value={props.newEmail}
        data-context="newUser"
        onChange={props.handleInputChange}
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={props.newUsername}
        data-context="newUser"
        onChange={props.handleInputChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        placeholder="Password"
        id="password"
        type="password"
        name="password"
        value={props.newPassword}
        data-context="newUser"
        onChange={props.handleInputChange}
      />
      <button
        disabled={
          !(
            props.newFirstName &&
            props.newLastName &&
            props.newUsername &&
            props.newPassword
          )
        }
        onClick={props.handleSignUp}
        type="submit"
      >
        Create user
      </button>
    </form>
  </Col>
);

export default AddUser;
