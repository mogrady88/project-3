import React, { Component } from "react";
import ProjectsAPI from "../../utils/projectsAPI";
import TasksAPI from "../../utils/tasksAPI";
import ThreadsAPI from "../../utils/threadsAPI";
import PostsAPI from "../../utils/postsAPI";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";

class Public extends Component {
  state = {
    project: {
      title: "",
      status: "",
      summary: "",
      funds: ""
    },
    task: {
      title: "",
      description: "",
      funds: ""
    }
  };

  handleProjectInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      project: {
        ...this.state.project,
        [name]: value
      }
    });
    console.log(this.state.project.title);
  };

  handleProjectFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.project);
    if (this.state.project.title && this.state.project.status) {
      console.log("hit");
      ProjectsAPI.saveProject({
        title: this.state.project.title,
        status: this.state.project.status,
        summary: this.state.project.summary,
        funds: parseInt(this.state.project.funds)
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  handleTaskInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      task: {
        ...this.state.task,
        [name]: value
      }
    });
    console.log(this.state.task.title);
  };

  handleTaskFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.task);
    if (this.state.task.title) {
      console.log("hit");
      TasksAPI.saveTask({
        title: this.state.task.title,
        description: this.state.task.description,
        funds: parseInt(this.state.task.funds)
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col s={3}>
            Project Submit
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.project.title}
                  onChange={this.handleProjectInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.project.status}
                  onChange={this.handleProjectInputChange}
                  name="status"
                  placeholder="Status (required)"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="20"
                  value={this.state.project.summary}
                  onChange={this.handleProjectInputChange}
                  name="summary"
                  placeholder="Summary (Optional)"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.project.funds}
                  onChange={this.handleProjectInputChange}
                  name="funds"
                  placeholder="Funds (optional)"
                />
              </div>
              <button
                disabled={
                  !(this.state.project.title && this.state.project.status)
                }
                onClick={this.handleProjectFormSubmit}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success"
              >
                Submit Project
              </button>
            </form>
          </Col>
          <Col s={3}>
            Task Submit
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.task.title}
                  onChange={this.handleTaskInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.task.description}
                  onChange={this.handleTaskInputChange}
                  name="description"
                  placeholder="Description (optional)"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.task.funds}
                  onChange={this.handleTaskInputChange}
                  name="funds"
                  placeholder="Funds (optional)"
                />
              </div>
              <button
                disabled={!this.state.task.title}
                onClick={this.handleTaskFormSubmit}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success"
              >
                Submit Task
              </button>
            </form>
          </Col>
          <Col s={3}>Thread Submit</Col>
          <Col s={3}>Comment Submit</Col>
        </Row>
      </div>
    );
  }
}

export default Public;
