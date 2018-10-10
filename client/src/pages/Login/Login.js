import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";

class Login extends Component {
  state = {};

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
        <Row>
          <Col s={6} className="grid1">
            THis is the login page
          </Col>
          <Col s={6} className="grid2">
            I can do React on a website!
          </Col>
        </Row>
        <div className="container">yolo</div>
      </div>
    );
  }
}

export default Login;
