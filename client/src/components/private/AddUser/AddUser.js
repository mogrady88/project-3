import React from "react";
import Col from "../../shared/grid/Col";

const AddUser = props => (
  <Col size="9">
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="newFirstName"
        placeholder="First Name (required)"
        value={props.newFirstName}
        onChange={props.handleInputChange}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="newLastName"
        placeholder="Last Name (required)"
        value={props.newLastName}
        onChange={props.handleInputChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="newEmail"
        placeholder="Email (optional)"
        value={props.newEmail}
        onChange={props.handleInputChange}
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="newUsername"
        placeholder="Username"
        value={props.newUsername}
        onChange={props.handleInputChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        placeholder="Password"
        id="password"
        type="password"
        name="newPassword"
        value={props.newPassword}
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
