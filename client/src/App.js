import React from "react";
import axios from "axios";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Public from "./pages/Public";
import Login from "./pages/Login";
import Private from "./pages/Private";
import TestCRUD from "./pages/TestCRUD";
import NoMatch from "./pages/NoMatch";
import PostDetail from "./pages/PostDetail";
import PrivateRoute from "./pages/PrivateRoute";
import UsersAPI from "./utils/usersAPI";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    UsersAPI.getCurrentUser().then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
        window.loggedIn = true;

        console.log("There is a user, setting loggedIn: ", window.loggedIn);
        window.currentUser = this.state.username;
        console.log("window.currentUser:", window.currentUser);
        if (this.state.loggedIn) {
          console.log(
            `Current user is ${this.state.username}. LoggedIn is ${
              window.loggedIn
            }. Redirecting to Private view.`
          );
        }
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  handleLogout(event) {
    event.preventDefault();
    console.log("logging out");
    UsersAPI.logoutUser({ user: this.state.username })
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.updateUser({
            loggedIn: false,
            username: null
          });
          window.currentUser = this.state.username;
        }
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  }

  render() {
    return (
      <div className="App">
        {/* {this.getUser} */}
        <Router>
          <Switch>
            <Route exact path="/" component={Public} />
            <Route
              exact
              path="/login"
              render={props => (
                <Login updateUser={this.updateUser} {...props} />
              )}
            />
            <PrivateRoute
              path="/private"
              component={Private}
              getUser={this.getUser}
              loggedIn={this.state.loggedIn}
              handleLogout={this.handleLogout}
            />
            <Route exact path="/test" component={TestCRUD} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
