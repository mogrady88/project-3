import React from "react";
import PostCard from "../../../components/shared/PostCard";
import API from "../../utils/postsAPI";
import { Link } from "react-router-dom";

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
