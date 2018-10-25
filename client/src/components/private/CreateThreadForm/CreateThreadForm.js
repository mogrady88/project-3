import React from "react";
import Col from "../../shared/grid/Col";

const CreateThreadForm = props => (
  <Col size="12">
    <form>
      <div className="form-group">
        <input
          className="form-control"
          value={props.newThread.title}
          onChange={props.handleInputChange}
          data-context="createThread"
          name="title"
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          value={props.newThread.comment}
          onChange={props.handleInputChange}
          data-context="createThread"
          name="comment"
          placeholder="Intial Comment"
        />
      </div>
      <button
        disabled={!(props.newThread.title && props.newThread.comment)}
        onClick={props.handleCreateThreadFormSubmit}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Submit Thread
      </button>
    </form>
  </Col>
);

export default CreateThreadForm;