import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
  <div>
    <h5>{props.name}</h5>
    <p>Status: {props.status}</p>
    <p>{props.summary}</p>
    <div className="card-action">
      <button onClick={() => props.loadCurrentProject(props.id)}>
        View Project
      </button>
    </div>
  </div>
);

export default ProjectCard;
