import React from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import Tasks from "../Tasks";
import Threads from "../Threads";
import Posts from "../Posts";
import Comments from "../Comments";
import CreateProjectForm from "../CreateProjectForm";
import "./ProjectViewer.css";

const ProjectContainer = props => (
  <Col size="9" otherclasses="projectMeta">
    {props.editProject ? (
      <Row>
        <Col size="12">
          <CreateProjectForm
            currentProject={props.currentProject}
            handleInputChange={props.handleInputChange}
            handleEditProjectFormSubmit={props.handleEditProjectFormSubmit}
            editProject={props.editProject}
          />
        </Col>
      </Row>
    ) : (
      <Row>
        <Col size="8" otherclasses="projectMetaLeft">
          <h5>
            <strong>{props.currentProject.title}</strong>
          </h5>
          <div className="statusDiv">
            <p>Status: {props.currentProject.status}</p>
          </div>
          <div className="summaryDiv">
            <p>Project Description: {props.currentProject.summary}</p>
          </div>
          <button
            data-command="edit"
            data-context="project"
            onClick={props.handleCreateEditBtn}
          >
            Edit Project
          </button>
        </Col>
        <Col size="4" otherclasses="projectMetaRight">
          <p>Funds: ${props.currentProject.funds}</p>
          <p>Used Funds: ${props.currentProject.usedFunds}</p>
          <p>
            Available Funds: $
            {props.currentProject.funds - props.currentProject.usedFunds}
          </p>
        </Col>
      </Row>
    )}

    <nav id="projectNav">
      <div>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li>
            <a onClick={() => props.loadProjectSubpage("tasks", 0)}>Tasks</a>
          </li>
          <li>
            <a onClick={() => props.loadProjectSubpage("threads", 0)}>
              Discussion
            </a>
          </li>
          <li>
            <a onClick={() => props.loadProjectSubpage("posts", 0)}>Posts</a>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    {props.subpage === "tasks" ? (
      <Tasks
        // State props
        tasks={props.currentProject.tasks} //array
        newTask={props.newTask} //object
        targetTask={props.targetTask} //id string
        createTask={props.createTask} //bool
        editTask={props.editTask} //bool
        // Functions
        handleCreateEditBtn={props.handleCreateEditBtn}
        handleInputChange={props.handleInputChange}
        handleCreateTaskFormSubmit={props.handleCreateTaskFormSubmit}
        handleEditTaskFormSubmit={props.handleEditTaskFormSubmit}
      />
    ) : props.subpage === "threads" ? (
      <Threads
        // State props
        threads={props.currentProject.threads}
        // Functions
        loadProjectSubpage={props.loadProjectSubpage}
      />
    ) : props.subpage === "posts" ? (
      <Posts
        // State props
        posts={props.currentProject.posts}
      />
    ) : props.subpage === "comments" ? (
      <Comments
        // State props
        thread={props.currentProject.threads[props.currentThreadIndex]}
      />
    ) : (
      "404"
    )}
  </Col>
);

export default ProjectContainer;
