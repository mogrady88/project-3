import React from "react";
import CommentCard from "../../components/privateComponents/CommentCard";

const Comments = props => (
  <div>
    <h4>{props.thread.title}</h4>
    {props.thread.comments.map(comment => (
      <CommentCard
        author={comment.author}
        text={comment.text}
        createdAt={comment.createdAt}
      />
    ))}
  </div>
);

export default Comments;
