import React from "react";
import Col from "../../grid/Col";
import ProjectCard from "../ProjectCard";
import "./ProjectsSidebar.css";

const ProjectsSidebar = props => (
  <Col size="3">
    {props.projects.map(project => (
      <ProjectCard
        key={project._id}
        id={project._id}
        name={project.title}
        status={project.status}
        summary={project.summary}
        loadCurrentProject={props.loadCurrentProject}
      />
    ))}
  </Col>
);

export default ProjectsSidebar;
