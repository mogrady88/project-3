import React from "react";

const CreateProject = props => (
  <div className="card">
    <div className="card-content projectCard ">
      <a className="btn" onClick={() => props.unloadCurrentProject()}>
        Create Project
      </a>
    </div>
  </div>
);

export default CreateProject;
