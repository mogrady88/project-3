import React, { Component } from "react";
import ProjectsAPI from "../../utils/projectsAPI";
import TasksAPI from "../../utils/tasksAPI";
import ThreadsAPI from "../../utils/threadsAPI";
import CommentsAPI from "../../utils/commentsAPI";
import PostsAPI from "../../utils/postsAPI";
import { Row, Col, Input } from "react-materialize";

class Public extends Component {
  state = {
    projects: [],
    tasks: [],
    threads: [],
    project: {
      title: "",
      status: "",
      summary: "",
      funds: ""
    },
    task: {
      title: "",
      description: "",
      funds: "",
      project: ""
    },
    thread: {
      title: "",
      author: "",
      initialComment: "",
      project: ""
    },
    comment: {
      text: "",
      author: "",
      thread: ""
    }
  };

  componentDidMount() {
    this.loadProjects();
    this.loadTasks();
    this.loadThreads();
  }

  loadProjects = () => {
    ProjectsAPI.getProjects()
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
      .catch(err => console.log(err));
  };

  loadTasks = () => {
    TasksAPI.getTasks()
      .then(res =>
        this.setState({
          tasks: res.data
        })
      )
      .catch(err => console.log(err));
  };

  loadThreads = () => {
    ThreadsAPI.getThreads()
      .then(res =>
        this.setState({
          threads: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // Project Functions
  handleProjectInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      project: {
        ...this.state.project,
        [name]: value
      }
    });
  };

  handleProjectFormSubmit = event => {
    event.preventDefault();
    if (this.state.project.title && this.state.project.status) {
      ProjectsAPI.saveProject({
        title: this.state.project.title,
        status: this.state.project.status,
        summary: this.state.project.summary,
        funds: parseInt(this.state.project.funds)
      })
        .then(res => {
          console.log(res);
          this.loadProjects();
        })
        .catch(err => console.log(err));
    }
  };

  // Task Functions
  handleTaskInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      task: {
        ...this.state.task,
        [name]: value
      }
    });
  };

  handleTaskFormSubmit = event => {
    event.preventDefault();
    if (this.state.task.title && this.state.task.project) {
      TasksAPI.saveTask([
        {
          title: this.state.task.title,
          description: this.state.task.description,
          funds: parseInt(this.state.task.funds)
        },
        { project: this.state.task.project }
      ])
        .then(res => {
          console.log(res);
          this.loadTasks();
        })
        .catch(err => console.log(err));
    }
  };

  // Thread Functions
  handleThreadInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      thread: {
        ...this.state.thread,
        [name]: value
      }
    });
  };

  handleThreadFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.thread.title &&
      this.state.thread.author &&
      this.state.thread.initialComment &&
      this.state.thread.project
    ) {
      ThreadsAPI.saveThread([
        {
          title: this.state.thread.title,
          author: this.state.thread.author
        },
        {
          text: this.state.thread.initialComment,
          author: this.state.thread.author
        },
        {
          project: this.state.thread.project
        }
      ])
        .then(res => {
          console.log(res);
          this.loadThreads();
        })
        .catch(err => console.log(err));
    }
  };

  // Comment Functions
  handleCommentInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  handleCommentFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.comment.author &&
      this.state.comment.text &&
      this.state.comment.thread
    ) {
      CommentsAPI.saveComment([
        {
          author: this.state.comment.author,
          text: this.state.comment.text
        },
        {
          thread: this.state.comment.thread
        }
      ])
        .then(res => {
          console.log(res);
          this.loadThreads();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col s={3}>
            <h5>Project Submit</h5>
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
                  className="form-control"
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
            <h5>Task Submit</h5>
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
                  className="form-control"
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
              <div className="form-group">
                <Input
                  s={12}
                  type="select"
                  label="Project Select"
                  value={this.state.task.project}
                  onChange={this.handleTaskInputChange}
                  name="project"
                >
                  {this.state.projects.map(project => (
                    <option value={project._id} key={project._id}>
                      {project.title}
                    </option>
                  ))}
                </Input>
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
          <Col s={3}>
            <h5>Thread Submit</h5>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.thread.title}
                  onChange={this.handleThreadInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.thread.author}
                  onChange={this.handleThreadInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="20"
                  value={this.state.thread.initialComment}
                  onChange={this.handleThreadInputChange}
                  name="initialComment"
                  placeholder="Initial Comment (required)"
                />
              </div>
              <div className="form-group">
                <Input
                  s={12}
                  type="select"
                  label="Project Select"
                  value={this.state.thread.project}
                  onChange={this.handleThreadInputChange}
                  name="project"
                >
                  {this.state.projects.map(project => (
                    <option value={project._id} key={project._id}>
                      {project.title}
                    </option>
                  ))}
                </Input>
              </div>
              <button
                disabled={
                  !(
                    this.state.thread.title &&
                    this.state.thread.author &&
                    this.state.thread.initialComment
                  )
                }
                onClick={this.handleThreadFormSubmit}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success"
              >
                Submit Thread
              </button>
            </form>
          </Col>
          <Col s={3}>
            <h5>Comment Submit</h5>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  value={this.state.comment.author}
                  onChange={this.handleCommentInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="20"
                  value={this.state.comment.text}
                  onChange={this.handleCommentInputChange}
                  name="text"
                  placeholder="Comment (required)"
                />
              </div>
              <div className="form-group">
                <Input
                  s={12}
                  type="select"
                  label="Thread Select"
                  value={this.state.comment.thread}
                  onChange={this.handleCommentInputChange}
                  name="thread"
                >
                  {this.state.threads.map(thread => (
                    <option value={thread._id} key={thread._id}>
                      {thread.title}
                    </option>
                  ))}
                </Input>
              </div>
              <button
                disabled={
                  !(this.state.comment.author && this.state.comment.text)
                }
                onClick={this.handleCommentFormSubmit}
                style={{ float: "right", marginBottom: 10 }}
                className="btn btn-success"
              >
                Submit Comment
              </button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Public;
