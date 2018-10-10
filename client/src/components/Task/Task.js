import React from "react";
import { Row, Col, Card, Input, Button } from "react-materialize";
import "./Task.css";

class Task extends React.Component {
  render() {
    return (
      <Card
        className="blue-grey lighten-1"
        textClassName="white-text"
        title={this.props.title}
      >
        <Row>
          <Col s={8}>{this.props.summary}</Col>
          <Col s={4}>
            <p>Status: {this.props.status}</p>
            <p>Funds: ${this.props.funds}</p>
            <Button>Edit task</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Task;
