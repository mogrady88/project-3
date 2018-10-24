import React from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import Tasks from "../Tasks";
import Threads from "../Threads";
import Posts from "../Posts";
import Comments from "../Comments";

const CreateProjectForm = props => (
  <Col size="9" otherclasses="projectMeta">
    <h5>Create Project</h5>
    <form>
      <div className="form-group">
        <input
          className="form-control"
          value={props.currentProject.title}
          onChange={props.handleProjectInputChange}
          name="title"
          placeholder="Title (required)"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={props.currentProject.status}
          onChange={props.handleProjectInputChange}
          name="status"
          placeholder="Status (required)"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          value={props.currentProject.summary}
          onChange={props.handleProjectInputChange}
          name="summary"
          placeholder="Summary (Optional)"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={props.currentProject.funds}
          onChange={props.handleProjectInputChange}
          name="funds"
          placeholder="Funds (optional)"
        />
      </div>
      <button
        disabled={
          !(
            props.currentProject.title &&
            props.currentProject.status &&
            props.currentProject.summary
          )
        }
        onClick={props.handleProjectFormSubmit}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Submit Project
      </button>
    </form>
  </Col>
);

export default CreateProjectForm;
