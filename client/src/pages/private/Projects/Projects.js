import React from "react";
import ProjectsSidebar from "../../../components/private/ProjectsSidebar";
import CreateProjectForm from "../CreateProjectForm";
import ProjectViewer from "../ProjectViewer";

const Projects = props => (
  <div>
    <ProjectsSidebar
      projects={props.projects} //array
      // Functions
      loadCurrentProject={props.loadCurrentProject}
      unloadCurrentProject={props.unloadCurrentProject}
    />
    {props.metadata.projectIsLoaded ? (
      <ProjectViewer
        currentProject={props.currentProject} //object
        // Unpacked metadata
        subpage={props.metadata.projectSubpage} //string
        currentThreadIndex={props.metadata.currentThreadIndex} //number
        editProject={props.metadata.editProject} //bool
        createTask={props.metadata.createTask} //bool
        editTask={props.metadata.editTask} //bool
        createThread={props.metadata.createThread} //bool
        editThread={props.metadata.editThread} //bool
        createComment={props.metadata.createComment} //bool
        editComment={props.metadata.editComment} //bool
        // Unpacked newData
        newTask={props.newData.newTask} //object
        newThread={props.newData.newThread} //object
        newComment={props.newData.newComment} //object
        // Unpacked targetEdits
        targetTask={props.targetEdits.task} //id string
        // Functions
        loadProjectSubpage={props.loadProjectSubpage}
        handleCreateEditBtn={props.handleCreateEditBtn}
        callCloseCreateEdit={props.callCloseCreateEdit}
        handleInputChange={props.handleInputChange} //form
        handleEditProjectFormSubmit={props.handleEditProjectFormSubmit} //form
        handleCreateTaskFormSubmit={props.handleCreateTaskFormSubmit} //form
        handleEditTaskFormSubmit={props.handleEditTaskFormSubmit} //form
        handleCreateThreadFormSubmit={props.handleCreateThreadFormSubmit} //form
        handleCreateCommentFormSubmit={props.handleCreateCommentFormSubmit} //form
      />
    ) : (
      <CreateProjectForm
        currentProject={props.currentProject} //object
        editProject={props.metadata.editProject} //bool
        // Functions
        handleInputChange={props.handleInputChange} //form
        handleCreateProjectFormSubmit={props.handleCreateProjectFormSubmit} //form
      />
    )}
  </div>
);

export default Projects;
