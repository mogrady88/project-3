import React, { Component } from "react";
import API from "../../utils/postsAPI";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import PostCard from '../../components/PostCard'

class Public extends Component {
  state = {
    posts : []
  };

  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data })
      )
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
            <Col s={9} className="grid1">
              {this.state.posts.map((post) => <PostCard {...post} isPublic={true} />)}
            </Col>
            <Col s={3} className="grid2">
            
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Public;
