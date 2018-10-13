import React from "react";
import { Row, Col, Tabs, Tab, Input, Button } from "react-materialize";
import Task from "../Task";
import ThreadCard from "../ThreadCard";
import PostCard from "../PostCard";
import "./ProjectContainer.css";

class ProjectContainer extends React.Component {
  render() {
    return (
      <div className="projectContainer blue-grey darken-1 white-text">
        <Row className="projectMeta">
          <Col s={8} className="projectMetaLeft">
            <h5>{this.props.project}</h5>
            <p>{this.props.summary}</p>
          </Col>
          <Col s={4} className="projectMetaRight">
            <p>Funds: ${this.props.totalFunds}</p>
            <p>Used Funds: ${this.props.usedFunds}</p>
            <p>
              Available Funds: ${this.props.totalFunds - this.props.usedFunds}
            </p>
          </Col>
        </Row>
        {this.props.children}
      </div>
    );
  }
}

export default ProjectContainer;
