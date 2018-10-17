// React Imports
import React, { Component } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
// Grid Imports
import Row from "../../components/grid/Row";
import Col from "../../components/grid/Col";
// Component Imports
import Nav from "../../components/Nav";
import Default from "../PrivateDefault";
import UsersSidebar from "../../components/privateComponents/UsersSidebar";
import NewUserCard from "../../components/privateComponents/NewUserCard";
import Projects from "../../pages/privatePages/Projects";
import ProjectsSidebar from "../../components/privateComponents/ProjectsSidebar";
import ProjectContainer from "../../components/privateComponents/ProjectContainer";
// import Tasks from "../Tasks";
// import Threads from "../Threads";
// import Posts from "../Posts";
//API Imports
import UsersAPI from "../../utils/usersAPI";
import ProjectsAPI from "../../utils/projectsAPI";
// CSS Imports
import "./Private.css";

class Private extends Component {
  constructor() {
    super();
    this.state = {
      metadata: {
        currentPage: "default",
        projectIsLoaded: false
      },
      projects: [],
      currentProject: {},
      project: "Project Name",
      summary:
        "Project summary text. Cras felis mauris, cursus ac lorem iaculis, rutrum facilisis nisl. Quisque quis odio sem. Nulla vehicula lectus eu ullamcorper mattis. Nulla in quam erat. Duis et consequat sem. Sed quis dictum urna. Phasellus metus urna, congue at hendrerit nec, sagittis eget sapien.",
      totalFunds: 5000,
      usedFunds: 2000,
      newUsername: "",
      newPassword: ""
    };
    this.showHideUserCreate = this.showHideUserCreate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.loadProjects();
  }

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
            projectIsLoaded: true
          }
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  showHideUserCreate() {
    if (!this.state.addUser) {
      this.setState({
        addUser: true
      });
    } else {
      this.setState({
        addUser: false
      });
    }
  }

  handleSignUp(event) {
    event.preventDefault();
    console.log("handleSignUp");
    UsersAPI.signupUser({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response);
        if (!response.data.error) {
          console.log("successful signup");
          alert(`Successful signup for new user: ${response.data.username}.`);
          this.setState({
            username: "",
            password: "",
            addUser: false
          });
          this.setState({
            addUser: true
          });
        } else {
          console.log("username already taken");
          alert(response.data.error);
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
        />
        <Row>
          {this.state.metadata.currentPage === "default" ? (
            <Default />
          ) : this.state.metadata.currentPage === "users" ? (
            <UsersSidebar />
          ) : this.state.metadata.currentPage === "projects" ? (
            <Projects
              projects={this.state.projects}
              loadCurrentProject={this.loadCurrentProject}
              projectIsLoaded={this.state.metadata.projectIsLoaded}
              currentProject={this.state.currentProject}
            />
          ) : (
            <Default />
          )}
          {/* <Col s={9} className="projectView">
            {!this.state.metadata.addUser ? (
              <ProjectContainer
                project={this.state.project}
                summary={this.state.summary}
                totalFunds={this.state.totalFunds}
                usedFunds={this.state.usedFunds}
              >
                <Navbar>
                  <Link to={`/private/tasks`}>
                    <NavItem>Tasks</NavItem>
                  </Link>
                  <Link to={`/private/threads`}>
                    <NavItem>Threads</NavItem>
                  </Link>
                  <Link to={`/private/posts`}>
                    <NavItem>Posts</NavItem>
                  </Link>
                </Navbar>
                <Switch>
                  <Route exact path={`/private/tasks`} component={Tasks} />
                  <Route exact path={`/private/threads`} component={Threads} />
                  <Route exact path={`/private/posts`} component={Posts} />
                </Switch>
              </ProjectContainer>
            ) : (
              <NewUserCard
                addUser={this.state.metadata.addUser}
                showHideUserCreate={this.showHideUserCreate}
                newUsername={this.state.newUsername}
                newPassword={this.state.newPassword}
                handleInputChange={this.handleInputChange}
                handleSignUp={this.handleSignUp}
              />
            )}
          </Col> */}
        </Row>
      </div>
    );
  }
}

export default withRouter(Private);
