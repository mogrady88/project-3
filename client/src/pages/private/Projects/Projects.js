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
        handleCreate={props.handleCreate}
        handleEdit={props.handleEdit}
        editProject={props.editProject}
        handleProjectInputChange={props.handleProjectInputChange}
        handleEditProjectFormSubmit={props.handleEditProjectFormSubmit}
        createTask={props.createTask}
        newTask={props.newTask}
        handleCreateTaskInputChange={props.handleCreateTaskInputChange}
        handleCreateTaskFormSubmit={props.handleCreateTaskFormSubmit}
        editTask={props.editTask}
        targetTask={props.targetTask}
        handleEditTaskInputChange={props.handleEditTaskInputChange}
        handleEditTaskFormSubmit={props.handleEditTaskFormSubmit}
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
