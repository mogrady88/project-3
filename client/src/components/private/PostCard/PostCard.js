import React from "react";
import Row from "../../shared/grid/Row";
import Col from "../../shared/grid/Col";
import "./PostCard.css";

const PostCard = props => (
  <div className="pCard">
    <h5>{props.title}</h5>
    <Row>
      <Col size="12">Tags: {props.tags.join(", ")}</Col>
    </Row>
    <Row>
      <Col size="8">
        <p>{props.summary}</p>
      </Col>
      <Col size="4">
        <button className="btn">Edit Post</button>
      </Col>
    </Row>
  </div>
);

export default PostCard;
