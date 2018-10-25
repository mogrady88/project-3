import React from "react";
import Col from "../../../components/shared/grid/Col";

const CreateProjectForm = props => (
  <Col size="9" otherclasses="projectMeta">
    <h5>Create Project</h5>
    <form>
      <div className="form-group">
        <input
          className="form-control"
          value={props.currentProject.title}
          onChange={props.handleInputChange}
          data-context="project"
          name="title"
          placeholder="Title (required)"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={props.currentProject.status}
          onChange={props.handleInputChange}
          data-context="project"
          name="status"
          placeholder="Status (required)"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          value={props.currentProject.summary}
          onChange={props.handleInputChange}
          data-context="project"
          name="summary"
          placeholder="Summary (Optional)"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={props.currentProject.funds}
          onChange={props.handleInputChange}
          data-context="project"
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
        onClick={
          props.editProject
            ? props.handleEditProjectFormSubmit
            : props.handleCreateProjectFormSubmit
        }
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Submit Project
      </button>
    </form>
  </Col>
);

export default CreateProjectForm;
