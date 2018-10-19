import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Row from "../../grid/Row";
import Col from "../../grid/Col";
import Tasks from "../../../pages/Tasks";
import Threads from "../../../pages/Threads";
import Posts from "../../../pages/Posts";
import Comments from "../../../pages/Comments";
import "./ProjectContainer.css";

const ProjectContainer = props => (
  <Col size="9" otherclasses="projectMeta">
    <Row>
      <Col size="8" otherclasses="projectMetaLeft">
        <h5>{props.currentProject.title}</h5>
        <p>{props.currentProject.summary}</p>
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
    <nav>
      <div class="nav-wrapper">
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
    {/* <Switch>
      <Route exact path={`/private/tasks`} component={Tasks} />
      <Route exact path={`/private/threads`} component={Threads} />
      <Route
        exact
        path={`/private/posts`}
        component={Posts}
        posts={props.currentProject.posts}
      />
    </Switch> */}
  </Col>
);

export default ProjectContainer;
