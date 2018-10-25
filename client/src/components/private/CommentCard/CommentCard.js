import React from "react";
import "./CommentCard.css";

const CommentCard = props => (
  <div className="cCard">
    <h5>{props.author}</h5>
    <p>{props.text}</p>
    <p>{props.createdAt}</p>
  </div>
);

export default CommentCard;
