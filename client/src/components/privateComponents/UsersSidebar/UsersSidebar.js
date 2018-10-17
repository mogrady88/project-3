import React from "react";
import Col from "../../grid/Col";
import "./UsersSidebar.css";

const UsersSidebar = props => (
  <Col size="3">
    <div>
      <button>View users</button>
    </div>
    <div>
      <button>Add user</button>
    </div>
  </Col>
);

export default UsersSidebar;
