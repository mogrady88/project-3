import React, { Component } from "react";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import ProjectCard from "../../components/ProjectCard";
import ProjectContainer from "../../components/ProjectContainer";
import API from "../../utils/postsAPI";
import { Link } from "react-router-dom";

class Private extends Component {
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
      <Nav isPublic={true} />
      <div className="container">
        <Row>
          <Col s={12}>
              <h1>
                {this.state.post.title}
              </h1>
              <h6>
                {this.state.post.summary}
              </h6>
              <hr />
          </Col>
        </Row>
        <Row>
          <Col s={10}>
            <article>
              <p>
                {this.state.post.content}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default Private;
