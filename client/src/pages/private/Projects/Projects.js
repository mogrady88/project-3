import React from "react";
import ProjectsSidebar from "../../../components/private/ProjectsSidebar";
import CreateProject from "../CreateProject";
import ProjectViewer from "../ProjectViewer";

const Projects = props => (
  <div>
    <ProjectsSidebar
      projects={props.projects}
      loadCurrentProject={props.loadCurrentProject}
      unloadCurrentProject={props.unloadCurrentProject}
    />
    {props.projectIsLoaded ? (
      <ProjectViewer
        currentProject={props.currentProject}
        loadProjectSubpage={props.loadProjectSubpage}
        subpage={props.subpage}
        currentThreadIndex={props.currentThreadIndex}
      />
    ) : (
      <CreateProject />
    )}
  </div>
);

export default Projects;
