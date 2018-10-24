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
      projects: [],
      currentProject: {
        title: "",
        status: "",
        summary: "",
        funds: ""
      },
      newData: {
        newUser: {
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: ""
        },
        newTask: {
          title: "",
          description: "",
          funds: ""
        }
      },
      targetEdits: {
        task: ""
      }
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.handleInputChange = this.handleUserInputChange.bind(this);
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
    } else if (page === "edit-user") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          projectSubpage: "edit-user"
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

  handleCreateEditBtn = event => {
    const command = event.target.getAttribute("data-command");
    const context = event.target.getAttribute("data-context");
    switch (command) {
      case "create":
        switch (context) {
          case "task":
            this.setState({
              metadata: {
                ...this.state.metadata,
                createTask: true
              }
            });
            break;
        }
        break;
      case "edit":
        let parentId;
        if (command !== "project") {
          parentId = event.target.getAttribute("data-id");
        }
        switch (context) {
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
            break;
        }
        break;
    }
  };

  closeCreateEdit = context => {
    switch (context) {
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

  handleInputChange = event => {
    const { name, value } = event.target;
    const context = event.target.getAttribute("data-context");
    switch (context) {
      case "project":
        this.setState({
          currentProject: {
            ...this.state.currentProject,
            [name]: value
          }
        });
        break;
      case "newUser":
        this.setState({
          newData: {
            ...this.state.newData,
            newUser: {
              ...this.state.newData.newUser,
              [name]: value
            }
          }
        });
        break;
      case "createTask":
        this.setState({
          newData: {
            ...this.state.newData,
            newTask: {
              ...this.state.newData.newTask,
              [name]: value
            }
          }
        });
        break;
      case "editTask":
        const index = event.target.getAttribute("data-index");
        const tasks = this.state.currentProject.tasks.slice();
        tasks[tasks.length - 1 - parseInt(index)] = {
          ...tasks[tasks.length - 1 - parseInt(index)],
          [name]: value
        };
        this.setState({
          currentProject: {
            ...this.state.currentProject,
            tasks: tasks
          }
        });
        break;
    }
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
          this.closeCreateEdit("project");
        })
        .catch(err => console.log(err));
    }
  };

  handleCreateTaskFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.newData.newTask.title &&
      this.state.newData.newTask.description &&
      this.state.newData.newTask.funds
    ) {
      TasksAPI.saveTask([
        {
          title: this.state.newData.newTask.title,
          description: this.state.newData.newTask.description,
          funds: parseInt(this.state.newData.newTask.funds)
        },
        {
          project: this.state.currentProject._id
        }
      ])
        .then(res => {
          console.log(res);
          this.loadProjects();
          this.loadCurrentProject(this.state.currentProject._id);
          this.closeCreateEdit("task");
        })
        .catch(err => console.log(err));
    }
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
          this.closeCreateEdit("task");
        })
        .catch(err => console.log(err));
    }
  };

  handleSignUp(event) {
    event.preventDefault();
    console.log("handleSignUp");
    UsersAPI.signupUser({
      firstName: this.state.newData.newUser.firstName,
      lastName: this.state.newData.newUser.lastName,
      email: this.state.newData.newUser.email,
      username: this.state.newData.newUser.username,
      password: this.state.newData.newUser.password
    })
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log("successful signup");
          alert(`Successful signup for new user: ${response.data.username}.`);
          this.setState({
            newData: {
              newUser: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: ""
              }
            }
          });
        } else {
          console.log("username already taken");
          alert(response.data.error);
          this.setState({
            newData: {
              newUser: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: ""
              }
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
              // State props
              subpage={this.state.metadata.userSubpage}
              newUsername={this.state.newData.newUser.username}
              newPassword={this.state.newData.newUser.password}
              newFirstName={this.state.newData.newUser.firstName}
              newLastName={this.state.newData.newUser.lastName}
              newEmail={this.state.newData.newUser.email}
              // Functions
              loadUserSubpage={this.loadUserSubpage}
              handleInputChange={this.handleInputChange}
              handleSignUp={this.handleSignUp}
            />
          ) : this.state.metadata.currentPage === "projects" ? (
            <Projects
              // State objects
              metadata={this.state.metadata}
              projects={this.state.projects}
              currentProject={this.state.currentProject}
              newData={this.state.newData}
              targetEdits={this.state.targetEdits}
              // Functions
              loadCurrentProject={this.loadCurrentProject}
              loadProjectSubpage={this.loadProjectSubpage}
              unloadCurrentProject={this.unloadCurrentProject}
              handleCreateEditBtn={this.handleCreateEditBtn}
              // Form Functions
              handleInputChange={this.handleInputChange}
              handleCreateProjectFormSubmit={this.handleCreateProjectFormSubmit}
              handleEditProjectFormSubmit={this.handleEditProjectFormSubmit}
              handleCreateTaskFormSubmit={this.handleCreateTaskFormSubmit}
              handleEditTaskFormSubmit={this.handleEditTaskFormSubmit}
            />
          ) : (
            "404"
          )}
        </Row>
      </div>
    );
  }
}

export default withRouter(PrivateMaster);
