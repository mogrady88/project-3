import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import SignInCard from "../../components/SignInCard";

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
    return <SignInCard />;
  }
}

export default Login;
