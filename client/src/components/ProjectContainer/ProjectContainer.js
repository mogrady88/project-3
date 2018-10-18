import React from "react";
import Row from "../grid/Row";
import Col from "../grid/Col";
import "./ProjectContainer.css";

const ProjectContainer = props => (
  <div className="projectContainer">
    <Row className="projectMeta">
      <Col size="8" className="projectMetaLeft">
        <h5>{props.project}</h5>
        <p>{props.summary}</p>
      </Col>
      <Col size="4" className="projectMetaRight">
        <p>Funds: ${props.totalFunds}</p>
        <p>Used Funds: ${props.usedFunds}</p>
        <p>Available Funds: ${props.totalFunds - props.usedFunds}</p>
      </Col>
    </Row>
    {props.children}
  </div>
);

export default ProjectContainer;
