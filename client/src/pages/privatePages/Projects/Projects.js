import React from "react";
import Col from "../../../components/grid/Col";
import ProjectsSidebar from "../../../components/privateComponents/ProjectsSidebar";
import ProjectContainer from "../../../components/privateComponents/ProjectContainer";

const Projects = props => (
  <div>
    <ProjectsSidebar
      projects={props.projects}
      loadCurrentProject={props.loadCurrentProject}
    />
    {props.projectIsLoaded ? (
      <ProjectContainer
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
