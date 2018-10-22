import React from "react";
import PostCard from "../../../components/private/PostCard";

const Posts = props => (
  <div>
    {props.posts.map(post => (
      <PostCard
        title={post.title}
        tags={post.tags}
        summary={post.summary}
        isPublic={false}
      />
    ))}
  </div>
);

export default Posts;
