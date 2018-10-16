import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Icon,
  form,
  label,
  Tab,
  Input,
  Button
} from "react-materialize";
import "./NewUserCard.css";

class NewUserCard extends React.Component {
  render() {
    return (
      <div className="Container">
        <Row>
          <Col m={10}>
            <Card className="newUser" title="Add new user">
              <Button
                floating
                tiny
                right
                onClick={this.props.showHideUserCreate}
              >
                {"X"}
              </Button>
              <form>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={this.props.username}
                  onChange={this.props.handleInputChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.props.password}
                  onChange={this.props.handleInputChange}
                />
                <Button onClick={this.props.handleSignUp} type="submit">
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

export default NewUserCard;
