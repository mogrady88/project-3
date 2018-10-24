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
        currentThreadIndex: 0
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
      project: "Project Name",
      summary:
        "Project summary text. Cras felis mauris, cursus ac lorem iaculis, rutrum facilisis nisl. Quisque quis odio sem. Nulla vehicula lectus eu ullamcorper mattis. Nulla in quam erat. Duis et consequat sem. Sed quis dictum urna. Phasellus metus urna, congue at hendrerit nec, sagittis eget sapien.",
      totalFunds: 5000,
      usedFunds: 2000,
      newFirstName: "",
      newLastName: "",
      newEmail: "",
      newUsername: "",
      newPassword: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleProjectInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      currentProject: {
        ...this.state.currentProject,
        [name]: value
      }
    });
  };

  handleProjectFormSubmit = event => {
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
        })
        .catch(err => console.log(err));
    }
  };

  handleSignUp(event) {
    event.preventDefault();
    console.log("handleSignUp");
    UsersAPI.signupUser({
      firstName: this.state.newFirstName,
      lastName: this.state.newLastName,
      email: this.state.newEmail,
      username: this.state.newUsername,
      password: this.state.newPassword
    })
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log("successful signup");
          alert(`Successful signup for new user: ${response.data.username}.`);
          this.setState({
            newUsername: "",
            newPassword: ""
          });
        } else {
          console.log("username already taken");
          alert(response.data.error);
          this.setState({
            newUsername: "",
            newPassword: ""
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
              newFirstName={this.state.newFirstName}
              newLastName={this.state.newLastName}
              newEmail={this.state.newEmail}
              newUsername={this.state.newUsername}
              newPassword={this.state.newPassword}
              handleInputChange={this.handleInputChange}
              handleSignUp={this.handleSignUp}
            />
          ) : this.state.metadata.currentPage === "projects" ? (
            <Projects
              projects={this.state.projects}
              projectIsLoaded={this.state.metadata.projectIsLoaded}
              loadCurrentProject={this.loadCurrentProject}
              unloadCurrentProject={this.unloadCurrentProject}
              handleProjectInputChange={this.handleProjectInputChange}
              handleProjectFormSubmit={this.handleProjectFormSubmit}
              loadProjectSubpage={this.loadProjectSubpage}
              currentProject={this.state.currentProject}
              subpage={this.state.metadata.projectSubpage}
              currentThreadIndex={this.state.metadata.currentThreadIndex}
            />
          ) : (
            <Projects
              projects={this.state.projects}
              projectIsLoaded={this.state.metadata.projectIsLoaded}
              loadCurrentProject={this.loadCurrentProject}
              unloadCurrentProject={this.unloadCurrentProject}
              loadProjectSubpage={this.loadProjectSubpage}
              currentProject={this.state.currentProject}
              subpage={this.state.metadata.projectSubpage}
              currentThreadIndex={this.state.metadata.currentThreadIndex}
            />
          )}
        </Row>
      </div>
    );
  }
}

export default withRouter(PrivateMaster);
