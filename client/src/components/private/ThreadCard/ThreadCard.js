import React from "react";
import { Card, Row, Col } from "react-materialize";
import "./ThreadCard.css";

class ThreadCard extends React.Component {
  render() {
    return (
      <Card className="blue-grey lighten-1" textClassName="white-text">
        <Row>
          <Col s={6}>
            <h5
              onClick={() =>
                this.props.loadProjectSubpage("comments", this.props.index)
              }
            >
              {this.props.title}
            </h5>
            <p>Created by: {this.props.author}</p>
          </Col>
          <Col s={2}>
            <h5>Replies</h5>
            <p>{this.props.replies}</p>
          </Col>
          <Col s={4}>
            <h5>Last Message</h5>
            <p>{this.props.updatedBy}</p>
            <p>{this.props.updatedAt}</p>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ThreadCard;
