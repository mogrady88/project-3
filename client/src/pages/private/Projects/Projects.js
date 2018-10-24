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
    {props.metadata.projectIsLoaded ? (
      <ProjectViewer
        currentProject={props.currentProject}
        subpage={props.metadata.projectSubpage}
        currentThreadIndex={props.metadata.currentThreadIndex}
        editProject={props.metadata.editProject}
        createTask={props.metadata.createTask}
        editTask={props.metadata.editTask}
        createThread={props.metadata.createThread}
        editThread={props.metadata.editThread}
        createComment={props.metadata.createComment}
        editComment={props.metadata.editComment}
        loadProjectSubpage={props.loadProjectSubpage}
        handleCreate={props.handleCreate}
        handleEdit={props.handleEdit}
        handleProjectInputChange={props.handleProjectInputChange}
        handleEditProjectFormSubmit={props.handleEditProjectFormSubmit}
        newTask={props.newTask}
        handleCreateTaskInputChange={props.handleCreateTaskInputChange}
        handleCreateTaskFormSubmit={props.handleCreateTaskFormSubmit}
        targetTask={props.targetEdits.targetTask}
        handleEditTaskInputChange={props.handleEditTaskInputChange}
        handleEditTaskFormSubmit={props.handleEditTaskFormSubmit}
      />
    ) : (
      <CreateProjectForm
        currentProject={props.currentProject}
        handleProjectInputChange={props.handleProjectInputChange}
        handleCreateProjectFormSubmit={props.handleCreateProjectFormSubmit}
        editProject={props.metadata.editProject}
      />
    )}
  </div>
);

export default Projects;
