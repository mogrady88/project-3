import React from "react";
import Row from "../../shared/grid/Row";
import Col from "../../shared/grid/Col";
import "./Task.css";

const Task = props => (
  <div>
    <h5>{props.title}</h5>
    <Row>
      <Col size="8">
        <p>{props.summary}</p>
      </Col>
      <Col size="4">
        <p>Status: {props.status}</p>
        <p>Funds: ${props.funds}</p>
        <button>Edit task</button>
      </Col>
    </Row>
  </div>
);

export default Task;