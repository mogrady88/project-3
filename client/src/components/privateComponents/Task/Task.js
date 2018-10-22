import React from "react";
import { Button } from "react-materialize";
import "./Task.css";
import Row from "../../grid/Row";
import Col from "../../grid/Col";

class Task extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content taskCard">
          <span className="card-title">{this.props.title}</span>
          <Row>
            <Col size="8">{this.props.summary}</Col>
            <Col otherClasses="tastCardCol" size="4">
              <p>Status: {this.props.status}</p>
              <p>Funds: ${this.props.funds}</p>
              <Button>Edit task</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Task;
