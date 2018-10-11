import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import "./SignInCard.css";

class SignInCard extends React.Component {
  render() {
    return (
      <div className="Container">
        <Row>
          <Col m={4} offset="m4">
            <Card className="signIn" title="Administrator Sign-In">
              <form>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Button onClick={this.handleSubmit} type="submit">
                  Sign In
                </Button>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignInCard;
