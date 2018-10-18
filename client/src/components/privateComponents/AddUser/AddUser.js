import React from "react";
import Col from "../../grid/Col";

const ProjectContainer = props => (
  <Col size="9">
    <form>
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
        placeholder="password"
        type="password"
        name="newPassword"
        value={props.newPassword}
        onChange={props.handleInputChange}
      />
      <button onClick={props.handleSignUp} type="submit">
        Create user
      </button>
    </form>
  </Col>
);

export default ProjectContainer;
