// React Imports
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// Grid Imports
import Row from "../../../components/shared/grid/Row";
// Component Imports
import Nav from "../../../components/shared/Nav";
import Users from "../Users";
import Projects from "../Projects";
//API Imports
import UsersAPI from "../../../utils/usersAPI";
import ProjectsAPI from "../../../utils/projectsAPI";
import TasksAPI from "../../../utils/tasksAPI";
// CSS Imports
import "./PrivateMaster.css";
import { runInThisContext } from "vm";

class PrivateMaster extends Component {
  constructor() {
    super();
    this.state = {
      metadata: {
        currentPage: "projects",
        projectIsLoaded: false,
        projectSubpage: "tasks",
        userSubpage: "view",
        currentThreadIndex: 0,
        editProject: false,
        createTask: false,
        editTask: false,
        createThread: false,
        editThread: false,
        createComment: false,
        editComment: false
      },
      user: {
        username: null
      },
      newUser: {
        newFirstName: "",
        newLastName: "",
        newEmail: "",
        newUsername: "",
        newPassword: ""
      },
      projects: [],
      currentProject: {
        title: "",
        status: "",
        summary: "",
        funds: ""
      },
      newTask: {
        title: "",
        description: "",
        funds: ""
      },
      targetEdits: {
        task: ""
      }
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleUserInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.loadProjects();
    this.setUser(this.props.user);
  }

  setUser = username => {
    this.setState({
      user: {
        ...this.state.user,
        username: username
      }
    });
  };

  loadPage = page => {
    if (page === "projects") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          currentPage: "projects"
        }
      });
      this.loadProjects();
    } else if (page === "users") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          currentPage: "users"
        }
      });
    }
  };

  loadUserSubpage = page => {
    if (page === "view") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          userSubpage: "view"
        }
      });
    } else if (page === "add") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          userSubpage: "add"
        }
      });
    }
  };

  loadProjectSubpage = (page, threadIndex) => {
    if (page === "tasks") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          projectSubpage: "tasks"
        }
      });
    } else if (page === "threads") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          projectSubpage: "threads"
        }
      });
    } else if (page === "posts") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          projectSubpage: "posts"
        }
      });
    } else if (page === "comments") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          projectSubpage: "comments",
          currentThreadIndex: threadIndex
        }
      });
    } else if (page === "edit-user") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          projectSubpage: "edit-user"
        }
      });
    }
  };

  loadProjects = () => {
    ProjectsAPI.getProjects()
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
      .catch(err => console.log(err));
  };

  loadCurrentProject = id => {
    ProjectsAPI.getProject(id)
      .then(res => {
        this.setState({
          currentProject: res.data
        });
        console.log(this.state.currentProject);
        let usedFunds = 0;
        if (this.state.currentProject.tasks.length > 0) {
          this.state.currentProject.tasks.map(
            task => (usedFunds += task.funds)
          );
        }
        this.setState({
          currentProject: {
            ...this.state.currentProject,
            usedFunds: usedFunds
          }
        });
        this.setState({
          metadata: {
            ...this.state.metadata,
            projectIsLoaded: true,
            projectSubpage: "tasks",
            currentThreadIndex: 0
          }
        });
      })
      .catch(err => console.log(err));
  };

  unloadCurrentProject = () => {
    this.setState({
      currentProject: {
        title: "",
        status: "",
        summary: "",
        funds: ""
      }
    });
    this.setState({
      metadata: {
        ...this.state.metadata,
        projectIsLoaded: false,
        projectSubpage: "tasks",
        currentThreadIndex: 0
      }
    });
  };

  handleCreate = event => {
    const command = event.target.name;
    switch (command) {
      case "task":
        this.setState({
          metadata: {
            ...this.state.metadata,
            createTask: true
          }
        });
        break;
    }
  };

  handleEdit = event => {
    const command = event.target.name;
    let parentId;
    if (command !== "project") {
      parentId = event.target.id;
    }
    switch (command) {
      case "project":
        this.setState({
          metadata: {
            ...this.state.metadata,
            editProject: true
          }
        });
        break;
      case "task":
        this.setState({
          metadata: {
            ...this.state.metadata,
            editTask: true
          }
        });
        this.setState({
          targetEdits: {
            ...this.state.targetEdits,
            task: parentId
          }
        });
        console.log(this.state.targetEdits.task);
        break;
    }
  };

  handleUpdate = command => {
    switch (command) {
      case "project":
        this.setState({
          metadata: {
            ...this.state.metadata,
            editProject: false
          }
        });
        break;
      case "task":
        this.setState({
          metadata: {
            ...this.state.metadata,
            createTask: false,
            editTask: false
          }
        });
        this.setState({
          newTask: {
            title: "",
            description: "",
            funds: ""
          }
        });
        this.setState({
          targetEdits: {
            ...this.state.targetEdits,
            task: ""
          }
        });
        break;
    }
  };

  handleUserInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      newUser: {
        ...this.state.newUser,
        [name]: value
      }
    });
  };

  handleProjectInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      currentProject: {
        ...this.state.currentProject,
        [name]: value
      }
    });
  };

  handleCreateProjectFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.currentProject.title &&
      this.state.currentProject.status &&
      this.state.currentProject.summary
    ) {
      ProjectsAPI.saveProject({
        title: this.state.currentProject.title,
        status: this.state.currentProject.status,
        summary: this.state.currentProject.summary,
        funds: parseInt(this.state.currentProject.funds)
      })
        .then(res => {
          console.log(res);
          this.loadProjects();
          this.loadCurrentProject(res.data._id);
        })
        .catch(err => console.log(err));
    }
  };

  handleEditProjectFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.currentProject.title &&
      this.state.currentProject.status &&
      this.state.currentProject.summary &&
      this.state.currentProject.funds
    ) {
      ProjectsAPI.updateProject(this.state.currentProject._id, {
        title: this.state.currentProject.title,
        status: this.state.currentProject.status,
        summary: this.state.currentProject.summary,
        funds: parseInt(this.state.currentProject.funds)
      })
        .then(res => {
          console.log(res);
          this.loadProjects();
          this.handleUpdate("project");
        })
        .catch(err => console.log(err));
    }
  };

  handleCreateTaskInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      newTask: {
        ...this.state.newTask,
        [name]: value
      }
    });
  };

  handleCreateTaskFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.newTask.title &&
      this.state.newTask.description &&
      this.state.newTask.funds
    ) {
      TasksAPI.saveTask([
        {
          title: this.state.newTask.title,
          description: this.state.newTask.description,
          funds: parseInt(this.state.newTask.funds)
        },
        {
          project: this.state.currentProject._id
        }
      ])
        .then(res => {
          console.log(res);
          this.loadProjects();
          this.loadCurrentProject(this.state.currentProject._id);
          this.handleUpdate("task");
        })
        .catch(err => console.log(err));
    }
  };

  handleEditTaskInputChange = event => {
    console.log(event.target);
    console.log(this.state.currentProject);
    const { name, value } = event.target;
    const index = event.target.getAttribute("data-index");

    const tasks = this.state.currentProject.tasks.slice(); //copy the array
    tasks[tasks.length - 1 - parseInt(index)] = {
      ...tasks[tasks.length - 1 - parseInt(index)],
      [name]: value
    }; //execute the manipulations

    console.log(tasks[tasks.length - 1 - index]);
    console.log(tasks);
    this.setState({
      currentProject: {
        ...this.state.currentProject,
        tasks: tasks
      }
    });
  };

  handleEditTaskFormSubmit = event => {
    event.preventDefault();
    const index = event.target.getAttribute("data-index");
    const id = event.target.getAttribute("data-id");

    if (
      this.state.currentProject.tasks[
        this.state.currentProject.tasks.length - 1 - index
      ].title &&
      this.state.currentProject.tasks[
        this.state.currentProject.tasks.length - 1 - index
      ].description &&
      this.state.currentProject.tasks[
        this.state.currentProject.tasks.length - 1 - index
      ].funds
    ) {
      TasksAPI.updateTask(id, {
        title: this.state.currentProject.tasks[
          this.state.currentProject.tasks.length - 1 - index
        ].title,
        description: this.state.currentProject.tasks[
          this.state.currentProject.tasks.length - 1 - index
        ].description,
        funds: parseInt(
          this.state.currentProject.tasks[
            this.state.currentProject.tasks.length - 1 - index
          ].funds
        )
      })
        .then(res => {
          console.log(res);
          this.loadProjects();
          this.loadCurrentProject(this.state.currentProject._id);
          this.handleUpdate("task");
        })
        .catch(err => console.log(err));
    }
  };

  handleSignUp(event) {
    event.preventDefault();
    console.log("handleSignUp");
    UsersAPI.signupUser({
      firstName: this.state.newUser.newFirstName,
      lastName: this.state.newUser.newLastName,
      email: this.state.newUser.newEmail,
      username: this.state.newUser.newUsername,
      password: this.state.newUser.newPassword
    })
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log("successful signup");
          alert(`Successful signup for new user: ${response.data.username}.`);
          this.setState({
            newUser: {
              newFirstName: "",
              newLastName: "",
              newEmail: "",
              newUsername: "",
              newPassword: ""
            }
          });
        } else {
          console.log("username already taken");
          alert(response.data.error);
          this.setState({
            newUser: {
              newFirstName: "",
              newLastName: "",
              newEmail: "",
              newUsername: "",
              newPassword: ""
            }
          });
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    console.log(this.props.match);
    return (
      <div>
        <Nav
          isPublic={false}
          loadPage={this.loadPage}
          handleLogout={this.props.handleLogout}
          loggedIn={this.props.loggedIn}
          user={this.props.user}
        />
        <Row>
          {this.state.metadata.currentPage === "users" ? (
            <Users
              loadUserSubpage={this.loadUserSubpage}
              subpage={this.state.metadata.userSubpage}
              newFirstName={this.state.newUser.newFirstName}
              newLastName={this.state.newUser.newLastName}
              newEmail={this.state.newUser.newEmail}
              newUsername={this.state.newUser.newUsername}
              newPassword={this.state.newUser.newPassword}
              handleInputChange={this.handleUserInputChange}
              handleSignUp={this.handleSignUp}
            />
          ) : this.state.metadata.currentPage === "projects" ? (
            <Projects
              projects={this.state.projects}
              projectIsLoaded={this.state.metadata.projectIsLoaded}
              loadCurrentProject={this.loadCurrentProject}
              unloadCurrentProject={this.unloadCurrentProject}
              handleProjectInputChange={this.handleProjectInputChange}
              handleCreateProjectFormSubmit={this.handleCreateProjectFormSubmit}
              loadProjectSubpage={this.loadProjectSubpage}
              currentProject={this.state.currentProject}
              subpage={this.state.metadata.projectSubpage}
              currentThreadIndex={this.state.metadata.currentThreadIndex}
              handleCreate={this.handleCreate}
              handleEdit={this.handleEdit}
              editProject={this.state.metadata.editProject}
              handleEditProjectFormSubmit={this.handleEditProjectFormSubmit}
              createTask={this.state.metadata.createTask}
              newTask={this.state.newTask}
              handleCreateTaskInputChange={this.handleCreateTaskInputChange}
              handleCreateTaskFormSubmit={this.handleCreateTaskFormSubmit}
              editTask={this.state.metadata.editTask}
              targetTask={this.state.targetEdits.task}
              handleEditTaskInputChange={this.handleEditTaskInputChange}
              handleEditTaskFormSubmit={this.handleEditTaskFormSubmit}
            />
          ) : (
            <Projects
              projects={this.state.projects}
              projectIsLoaded={this.state.metadata.projectIsLoaded}
              loadCurrentProject={this.loadCurrentProject}
              unloadCurrentProject={this.unloadCurrentProject}
              handleProjectInputChange={this.handleProjectInputChange}
              handleCreateProjectFormSubmit={this.handleCreateProjectFormSubmit}
              loadProjectSubpage={this.loadProjectSubpage}
              currentProject={this.state.currentProject}
              subpage={this.state.metadata.projectSubpage}
              currentThreadIndex={this.state.metadata.currentThreadIndex}
              handleCreate={this.handleCreate}
              handleEdit={this.handleEdit}
              editProject={this.state.metadata.editProject}
              handleEditProjectFormSubmit={this.handleEditProjectFormSubmit}
              createTask={this.state.metadata.createTask}
              newTask={this.state.newTask}
              handleCreateTaskInputChange={this.handleCreateTaskInputChange}
              handleCreateTaskFormSubmit={this.handleCreateTaskFormSubmit}
              editTask={this.state.metadata.editTask}
              targetTask={this.state.targetEdits.task}
              handleEditTaskInputChange={this.handleEditTaskInputChange}
              handleEditTaskFormSubmit={this.handleEditTaskFormSubmit}
            />
          )}
        </Row>
      </div>
    );
  }
}

export default withRouter(PrivateMaster);
