import React from "react";
import { Row, Col, Card, Input, Button } from "react-materialize";
import "./PostCard.css";
import { Link } from "react-router-dom";

class PostCard extends React.Component {
  render() {
    return (
      <Card
        className="blue-grey lighten-1"
        textClassName="white-text"
        title={this.props.title}
      >
        <Row>
          <Col s={12}>Tags: {this.props.tags.join(", ")}</Col>
        </Row>
        <Row>
          <Col s={8}>
            <p>{this.props.summary}</p>
          </Col>
          <Col s={4}>
          <Link to={"/posts/" + this.props._id}>
            <Button>{this.props.isPublic ? "View Post" : "Edit Post"}</Button>
          </Link>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default PostCard;
