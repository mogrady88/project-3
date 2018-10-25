import React from "react";
import Moment from "../../shared/Moment";
import "./CommentCard.css";

const CommentCard = props => (
  <div>
    <h5>{props.author}</h5>
    <p>{props.text}</p>
    <p>
      <Moment time={props.updatedAt} />
    </p>
  </div>
);

export default CommentCard;
