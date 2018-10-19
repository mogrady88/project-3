import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
  <div className="card">
    <div className="card-content projectCard ">
      <span className="card-title">{props.name}</span>
      <p>
        Status: <strong>{props.status}</strong>
      </p>
      <p>{props.summary}</p>
      <div className="card-action">
        <a className="btn" onClick={() => props.loadCurrentProject(props.id)}>
          View Project
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
