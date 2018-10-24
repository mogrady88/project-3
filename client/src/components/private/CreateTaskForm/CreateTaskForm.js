import React from "react";
import Col from "../../shared/grid/Col";

const CreateTaskForm = props => (
  <Col size="12">
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
        onClick={
          props.editProject
            ? props.handleEditProjectFormSubmit
            : props.handleCreateProjectFormSubmit
        }
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Submit Task
      </button>
    </form>
  </Col>
);

export default CreateTaskForm;