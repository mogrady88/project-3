import React from "react";
import ProjectsSidebar from "../../../components/private/ProjectsSidebar";
import CreateProjectForm from "../CreateProjectForm";
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
      <CreateProjectForm
        currentProject={props.currentProject}
        handleProjectInputChange={props.handleProjectInputChange}
        handleProjectFormSubmit={props.handleProjectFormSubmit}
      />
    )}
  </div>
);

export default Projects;
