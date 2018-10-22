import React, { Component } from "react";
import API from "../../../utils/postsAPI";
import Nav from "../../../components/shared/Nav";
import PostCard from "../../../components/public/PostCard";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";

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
            <Col size="12" className="grid1">
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
