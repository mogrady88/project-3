import React from "react";
import { Card, CardTitle } from "react-materialize";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    return (
      <Card
        className="blue-grey darken-1"
        textClassName="white-text"
        title={this.props.name}
        actions={[<a href="#">View Project</a>]} //Needs onclick function passed into it to render the projectContainer with appropriate data
      >
        <p>Status: {this.props.status}</p>
        <hr />
        <p>{this.props.summary}</p>
      </Card>
    );
  }
}

export default ProjectCard;
