import React from "react";

const CreateProject = props => (
  <div className="card" onClick={() => props.unloadCurrentProject()}>
    <div className="card-content projectCard ">
      <span className="card-title">
        <strong>Create Project</strong>
      </span>
    </div>
  </div>
);

export default CreateProject;
