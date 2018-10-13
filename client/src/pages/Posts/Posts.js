import React, { Component } from "react";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import PostCard from "../../components/PostCard"
import API from "../../utils/postsAPI";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    post: {}
  };

  // When this component mounts, grab the Post with the _id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc

  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <PostCard
              title="The Art of Exposure: Thinking Sculpture with Heidegger"
              tags={["Mike Ryan Lecture Series", "Heidegger", "Aesthetics"]}
              summary="A lecture by Andrew Mitchell of Emory University on October 1, 12:30 – 1:45 in the Student Center Leadership Room. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
            <PostCard
              title="Gendered Bodies: The Feminist Reception of Merleau-Ponty’s Embodiment Theory"
              tags={[
                "Mike Ryan Lecture Series",
                "Merleau-Ponty",
                "Phenomenology",
                "Feminism"
              ]}
              summary="A lecture by Talia Welsh of the University of Tennessee at Chattanooga on October 7, 12:30 – 1:45 in the Student Center Leadership Room. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
            <PostCard
              title="The AI Constellation: Cybernetics, Science Fiction, and Communication"
              tags={[
                "Mike Ryan Lecture Series",
                "Philosophy of Science",
                "Artificial Intelligence"
              ]}
              summary="A lecture by Bruce Clarke of Texas Tech on November 5, 12:30 – 1:45 in room HS1000. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
            <PostCard
              title="Only a Buddha Knows: Vasubandhu and External-World Skepticism"
              tags={["Mike Ryan Lecture Series", "Buddhism"]}
              summary="A lecture by Ethan Mills of the University of Tennessee at Chattanooga on October 22, 12:30 – 1:45 in room HS1000. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
      </div>
    );
  }
}

export default Posts;
