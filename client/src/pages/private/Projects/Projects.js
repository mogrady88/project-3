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
        handleEdit={props.handleEdit}
        editProject={props.editProject}
        handleProjectInputChange={props.handleProjectInputChange}
        handleEditProjectFormSubmit={props.handleEditProjectFormSubmit}
      />
    ) : (
      <CreateProjectForm
        currentProject={props.currentProject}
        handleProjectInputChange={props.handleProjectInputChange}
        handleCreateProjectFormSubmit={props.handleCreateProjectFormSubmit}
        editProject={props.editProject}
      />
    )}
  </div>
);

export default Projects;
