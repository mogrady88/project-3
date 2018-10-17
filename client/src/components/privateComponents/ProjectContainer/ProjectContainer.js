import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Row from "../../grid/Row";
import Col from "../../grid/Col";
import Tasks from "../../../pages/Tasks";
import Threads from "../../../pages/Threads";
import Posts from "../../../pages/Posts";
import "./ProjectContainer.css";

const ProjectContainer = props => (
  <Col size="9">
    <Row className="projectMeta">
      <Col size="8" className="projectMetaLeft">
        <h5>{props.currentProject.title}</h5>
        <p>{props.currentProject.summary}</p>
      </Col>
      <Col size="4" className="projectMetaRight">
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
            <Link to={`/private/tasks`}>Tasks</Link>
          </li>
          <li>
            <Link to={`/private/discussion`}>Discussion</Link>
          </li>
          <li>
            <Link to={`/private/posts`}>Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>
      <Route exact path={`/private/tasks`} component={Tasks} />
      <Route exact path={`/private/threads`} component={Threads} />
      <Route exact path={`/private/posts`} component={Posts} />
    </Switch>
  </Col>
);

export default ProjectContainer;
