import React from "react";
import { Card, CardTitle } from "react-materialize";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    return (
      <Card>
        <h5>{this.props.name}</h5>
        <p>Status: {this.props.status}</p>
        <p>{this.props.summary}</p>
        <div className="card-action">
          <a href="#">View Project</a>
        </div>
      </Card>
    );
  }
}

export default ProjectCard;
