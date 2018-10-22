import React, { Component } from "react";
<<<<<<< HEAD:client/src/pages/public/Public/Public.js
import API from "../../../utils/postsAPI";
import Nav from "../../../components/shared/Nav";
import PostCard from "../../../components/public/PostCard";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
=======
import API from "../../utils/postsAPI";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import PostCard from "../../components/PostCard";
>>>>>>> master:client/src/pages/Public/Public.js

class Public extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Nav isPublic={true} />
        <div className="container">
          <Row>
<<<<<<< HEAD:client/src/pages/public/Public/Public.js
            <Col size="12" className="grid1">
=======
            <Col s={12} className="grid1">
>>>>>>> master:client/src/pages/Public/Public.js
              {this.state.posts.map(post => (
                <PostCard {...post} isPublic={true} />
              ))}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Public;
