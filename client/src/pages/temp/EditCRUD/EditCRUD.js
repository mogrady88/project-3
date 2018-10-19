import React, { Component } from "react";
import ProjectsAPI from "../../../utils/projectsAPI";
import TasksAPI from "../../../utils/tasksAPI";
import ThreadsAPI from "../../../utils/threadsAPI";
import CommentsAPI from "../../../utils/commentsAPI";
import PostsAPI from "../../../utils/postsAPI";
import { Row, Col, Input } from "react-materialize";

class Public extends Component {
  state = {
    projects: [],
    tasks: [],
    posts: [],
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
      project: []
    },
    post: {
      title: "",
      summary: "",
      content: "",
      author: "",
      tags: [],
      currentTag: "",
      isPublished: false,
      project: []
    },
    thread: {
      title: "",
      author: "",
      initialComment: [],
      project: []
    },
    comment: {
      text: "",
      author: "",
      thread: ""
    }
  };

  componentDidMount() {
    this.loadProjects();
    this.loadPosts();
    this.loadTasks();
    this.loadThreads();
  }

  //TASK APIS
  loadTasks = () => {
    TasksAPI.getTasks()
      .then(res =>
        this.setState({
          tasks: res.data
        })
      )
      .catch(err => console.log(err));
  };
  loadTask = id => {
    TasksAPI.getTask(id)
      .then(res =>
        this.setState({
          task: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //POST APIS
  loadPosts = () => {
    PostsAPI.getPosts()
      .then(res =>
        this.setState({
          posts: res.data
        })
      )
      .catch(err => console.log(err));
  };

  loadPost = id => {
    PostsAPI.getPost(id)
      .then(res =>
        this.setState({
          post: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //THREAD APIS
  loadThreads = () => {
    ThreadsAPI.getThreads()
      .then(res =>
        this.setState({
          threads: res.data
        })
      )
      .catch(err => console.log(err));
  };
  loadThread = id => {
    ThreadsAPI.getThread(id)
      .then(res =>
        this.setState({
          thread: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //UPDATE APIS
  updateProject = (id, data) => {
    ProjectsAPI.updateProject(id, data)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  };
  updatePost = (id, data) => {
    PostsAPI.updatePost(id, data)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  };
  updateTask = (id, data) => {
    TasksAPI.updateTask(id, data)
      .then(res => this.setState({ task: res.data }))
      .catch(err => console.log(err));
  };
  updateThread = (id, data) => {
    ThreadsAPI.updateThread(id, data)
      .then(res => this.setState({ thread: res.data }))
      .catch(err => console.log(err));
  };

  handleProjectInput = event => {
    event.preventDefault();
    this.loadProject(event.target.value);
    console.log(this.state.project);
  };
  handleThreadInput = event => {
    event.preventDefault();
    this.loadThread(event.target.value);
    console.log(this.state.thread);
  };
  handlePostInput = event => {
    event.preventDefault();
    this.loadPost(event.target.value);
    console.log(this.state.post);
  };
  handleTaskInput = event => {
    event.preventDefault();
    this.loadTask(event.target.value);
    console.log(this.state.task);
  };

  //TASK APIS
  loadTasks = () => {
    TasksAPI.getTasks()
      .then(res =>
        this.setState({
          tasks: res.data
        })
      )
      .catch(err => console.log(err));
  };
  loadTask = id => {
    TasksAPI.getTask(id)
      .then(res =>
        this.setState({
          task: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //POST APIS
  loadPosts = () => {
    PostsAPI.getPosts()
      .then(res =>
        this.setState({
          posts: res.data
        })
      )
      .catch(err => console.log(err));
  };

  loadPost = id => {
    PostsAPI.getPost(id)
      .then(res =>
        this.setState({
          post: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //THREAD APIS
  loadThreads = () => {
    ThreadsAPI.getThreads()
      .then(res =>
        this.setState({
          threads: res.data
        })
      )
      .catch(err => console.log(err));
  };
  loadThread = id => {
    ThreadsAPI.getThread(id)
      .then(res =>
        this.setState({
          thread: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //UPDATE APIS
  updateProject = (id, data) => {
    ProjectsAPI.updateProject(id, data)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  };
  updatePost = (id, data) => {
    PostsAPI.updatePost(id, data)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  };
  updateTask = (id, data) => {
    TasksAPI.updateTask(id, data)
      .then(res => this.setState({ task: res.data }))
      .catch(err => console.log(err));
  };
  updateThread = (id, data) => {
    ThreadsAPI.updateThread(id, data)
      .then(res => this.setState({ thread: res.data }))
      .catch(err => console.log(err));
  };

  handleProjectInput = event => {
    event.preventDefault();
    this.loadProject(event.target.value);
    console.log(this.state.project);
  };
  handleThreadInput = event => {
    event.preventDefault();
    this.loadThread(event.target.value);
    console.log(this.state.thread);
  };
  handlePostInput = event => {
    event.preventDefault();
    this.loadPost(event.target.value);
    console.log(this.state.post);
  };
  handleTaskInput = event => {
    event.preventDefault();
    this.loadTask(event.target.value);
    console.log(this.state.task);
  };

  //UPDATE COLLECTION VALUES
  handleProjectChange = event => {
    const { name, value } = event.target;
    this.setState({
      project: {
        ...this.state.project,
        [name]: value
      }
    });
    console.log(this.state.project);
  };
  handleThreadChange = event => {
    const { name, value } = event.target;
    this.setState({
      thread: {
        ...this.state.thread,
        [name]: value
      }
    });
    console.log(this.state.thread);
  };
  handleTaskChange = event => {
    const { name, value } = event.target;
    this.setState({
      task: {
        ...this.state.task,
        [name]: value
      }
    });
    console.log(this.state.task);
  };
  handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    });
    console.log(this.state.post);
  };

  //UPDATES COLLECTIONS ON CLICK
  handleProjectUpdate = event => {
    const id = this.state.project._id;
    const data = this.state.project;
    event.preventDefault();
    console.log(id);
    this.updateProject(id, data);
  };
  handlePostUpdate = event => {
    const id = this.state.post._id;
    const data = this.state.post;
    event.preventDefault();
    console.log(id);
    this.updatePost(id, data);
  };
  handleThreadUpdate = event => {
    const id = this.state.thread._id;
    const data = this.state.thread;
    event.preventDefault();
    console.log(id);
    this.updateThread(id, data);
  };
  handleTaskUpdate = event => {
    const id = this.state.task._id;
    const data = this.state.task;
    event.preventDefault();
    console.log(id);
    this.updateTask(id, data);
  };

  render() {
    return (
      <div>
        <Row>
          {/*Select project*/}
          <Col s={3}>
            <h5>Select Project to Edit</h5>
            <Input
              s={12}
              type="select"
              label="Project Select"
              value={this.state.project}
              onChange={this.handleProjectInput}
              name="project"
            >
              {this.state.projects.map(project => (
                <option value={project._id} key={project._id}>
                  {project.title}
                </option>
              ))}
            </Input>
          </Col>
          {/* {task input} */}
          <Col s={3}>
            <h5>Select Task to Edit</h5>
            <Input
              s={12}
              type="select"
              label="Task Select"
              value={this.state.task}
              onChange={this.handleTaskInput}
              name="task"
            >
              {this.state.tasks.map(task => (
                <option value={task._id} key={task._id}>
                  {task.title}
                </option>
              ))}
            </Input>
          </Col>
          {/* {post input} */}
          <Col s={3}>
            <h5>Select Post to Edit</h5>
            <Input
              s={12}
              type="select"
              label="Post Select"
              value={this.state.post}
              onChange={this.handlePostInput}
              name="post"
            >
              {this.state.posts.map(post => (
                <option value={post._id} key={post._id}>
                  {post.title}
                </option>
              ))}
            </Input>
          </Col>
          {/* {thread input} */}
          <Col s={3}>
            <h5>Select Thread to Edit</h5>
            <Input
              s={12}
              type="select"
              label="Thread Select"
              value={this.state.thread}
              onChange={this.handleThreadInput}
              name="thread"
            >
              {this.state.threads.map(thread => (
                <option value={thread._id} key={thread._id}>
                  {thread.title}
                </option>
              ))}
            </Input>
          </Col>
        </Row>

        <Row>
          {/* {project edit} */}
          <Col s={3}>
            <h5>Update Project Info</h5>
            <input
              placeholder="Title"
              name="title"
              onChange={this.handleProjectChange}
              value={this.state.project.title}
            />
            <input
              placeholder="Summary"
              name="summary"
              onChange={this.handleProjectChange}
              value={this.state.project.summary}
            />
            <input
              placeholder="Status"
              name="status"
              onChange={this.handleProjectChange}
              value={this.state.project.status}
            />
            <input
              placeholder="Funds"
              name="funds"
              onChange={this.handleProjectChange}
              value={this.state.project.funds}
            />
            <button onClick={this.handleProjectUpdate}>Update</button>
          </Col>
          {/* {task edit} */}
          <Col s={3}>
            <h5>Update Task Info</h5>
            <input
              placeholder="Title"
              name="title"
              onChange={this.handleTaskChange}
              value={this.state.task.title}
            />
            <input
              placeholder="Description"
              name="description"
              onChange={this.handleTaskChange}
              value={this.state.task.description}
            />
            <input
              placeholder="Funds"
              name="funds"
              onChange={this.handleTaskChange}
              value={this.state.task.funds}
            />
            <input
              placeholder="Project"
              name="project"
              onChange={this.handleTaskChange}
              value={this.state.task.project}
            />
            <button onClick={this.handleTaskUpdate}>Update</button>
          </Col>
          {/* {post edit} */}
          <Col s={3}>
            <h5>Update Post Info</h5>
            <input
              placeholder="Title"
              name="title"
              onChange={this.handlePostChange}
              value={this.state.post.title}
            />
            <input
              placeholder="Summary"
              name="summary"
              onChange={this.handlePostChange}
              value={this.state.post.summary}
            />
            <input
              placeholder="Content"
              name="content"
              onChange={this.handlePostChange}
              value={this.state.post.content}
            />
            <input
              placeholder="Author"
              name="author"
              onChange={this.handlePostChange}
              value={this.state.post.author}
            />
            <input
              placeholder="Project"
              name="project"
              onChange={this.handlePostChange}
              value={this.state.post.project}
            />
            <button onClick={this.handlePostUpdate}>Update</button>
          </Col>
          {/* {thread edit} */}
          <Col s={3}>
            <h5>Update Thread Info</h5>
            <input
              placeholder="Title"
              name="title"
              onChange={this.handleThreadChange}
              value={this.state.thread.title}
            />
            <input
              placeholder="Author"
              name="author"
              onChange={this.handleThreadChange}
              value={this.state.thread.author}
            />
            <input
              placeholder="Initial Comment"
              name="initial-comment"
              onChange={this.handleThreadChange}
              value={this.state.thread.initialComment}
            />
            <input
              placeholder="Project"
              name="project"
              onChange={this.handleThreadChange}
              value={this.state.thread.project}
            />
            <button onClick={this.handleThreadUpdate}>Update</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Public;
