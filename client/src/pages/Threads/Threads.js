import React, { Component } from "react";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import ThreadCard from "../../components/privateComponents/ThreadCard";
import ProjectCard from "../../components/ProjectCard";
import ProjectContainer from "../../components/ProjectContainer";
import API from "../../utils/postsAPI";
import { Link } from "react-router-dom";

class Threads extends Component {
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
        <Row>
          <Col s={12}>
            <ThreadCard
              title="Who is bringing the salsa?"
              author="Tyler Maxwell"
              replies={17}
              updatedBy="Matt O'Grady"
              updatedAt="Sep 27, 2018"
            />
            <ThreadCard
              title="Who is bringing the salsa?"
              author="Tyler Maxwell"
              replies={17}
              updatedBy="Matt O'Grady"
              updatedAt="Sep 27, 2018"
            />
            <ThreadCard
              title="Who is bringing the salsa?"
              author="Tyler Maxwell"
              replies={17}
              updatedBy="Matt O'Grady"
              updatedAt="Sep 27, 2018"
            />
            <ThreadCard
              title="Who is bringing the salsa?"
              author="Tyler Maxwell"
              replies={17}
              updatedBy="Matt O'Grady"
              updatedAt="Sep 27, 2018"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Threads;
