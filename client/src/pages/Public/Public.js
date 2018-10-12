import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import PostCard from '../../components/PostCard'

class Public extends Component {
  state = {
    posts : [{
    _id: "test",
    title: "Coolio!!!!!",
    summary: "The Detailed Story of How Cool We Are",
    content: "Hey Guess What We're collectively cool.",
    tags: ["Dogs, Me, CoolStuff"],
    isPublished: true,
    createdAt: "10/11/2018"
  }
]};

  componentDidMount() {}

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
              asdf
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Public;
