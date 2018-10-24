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
            handleProjectInputChange={props.handleProjectInputChange}
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
          <p>{props.currentProject.summary}</p>
          <button name="editProject" onClick={props.handleEdit}>
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
        <ul id="nav-mobile" class="hide-on-med-and-down">
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
      <Tasks tasks={props.currentProject.tasks} />
    ) : props.subpage === "threads" ? (
      <Threads
        threads={props.currentProject.threads}
        loadProjectSubpage={props.loadProjectSubpage}
      />
    ) : props.subpage === "posts" ? (
      <Posts posts={props.currentProject.posts} />
    ) : props.subpage === "comments" ? (
      <Comments
        thread={props.currentProject.threads[props.currentThreadIndex]}
      />
    ) : (
      <Tasks />
    )}
  </Col>
);

export default ProjectContainer;
