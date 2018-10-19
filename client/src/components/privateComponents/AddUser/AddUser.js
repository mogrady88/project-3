import React from "react";
import Col from "../../grid/Col";

const AddUser = props => (
  <Col size="9">
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="newUsername"
        placeholder="Username (required)"
        value={props.newUsername}
        onChange={props.handleInputChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        placeholder="Password (required)"
        id="password"
        type="password"
        name="newPassword"
        value={props.newPassword}
        onChange={props.handleInputChange}
      />
      <button
        disabled={!(props.newUsername && props.newPassword)}
        onClick={props.handleSignUp}
        type="submit"
      >
        Create user
      </button>
    </form>
  </Col>
);

export default AddUser;
