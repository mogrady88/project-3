import React from "react";
import ProjectsSidebar from "../../../components/private/ProjectsSidebar";
import ProjectViewer from "../ProjectViewer";

const Projects = props => (
  <div>
    <ProjectsSidebar
      projects={props.projects}
      loadCurrentProject={props.loadCurrentProject}
    />
    {props.projectIsLoaded ? (
      <ProjectViewer
        currentProject={props.currentProject}
        loadProjectSubpage={props.loadProjectSubpage}
        subpage={props.subpage}
        currentThreadIndex={props.currentThreadIndex}
      />
    ) : (
      "Project is not loaded"
    )}
  </div>
);

export default Projects;
