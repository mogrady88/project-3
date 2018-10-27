// Import React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Pages
import Public from "./pages/public/Public";
import Login from "./pages/public/Login";
import PrivateMaster from "./pages/private/PrivateMaster";
import TestCRUD from "./pages/temp/TestCRUD";
import NoMatch from "./pages/public/NoMatch";
import PostDetail from "./pages/public/PostDetail";
import EditCRUD from "./pages/temp/EditCRUD";
import EditUser from "./pages/temp/EditUser";
// Import Private Route
import PrivateRoute from "./components/private/PrivateRoute";
// Import API
import UsersAPI from "./utils/usersAPI";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {
        username: "",
        firstName: "",
        lastName: ""
      }
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    UsersAPI.getCurrentUser().then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          user: {
            username: response.data.user.username,
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName
          }
        });
        console.log("There is a user, setting loggedIn: ", this.state.loggedIn);
        if (this.state.loggedIn) {
          console.log(
            `Current user is ${this.state.user.username}. LoggedIn is ${
              this.state.loggedIn
            }. Redirecting to Private view.`
          );
        }
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  handleLogout(event) {
    event.preventDefault();
    sessionStorage.removeItem("disco-panda");
    console.log("logging out");
    UsersAPI.logoutUser({ user: this.state.username })
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  }

  render() {
    return (
      <div className="App">
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
              component={PrivateMaster}
              loggedIn={this.state.loggedIn}
              handleLogout={this.handleLogout}
              getUser={this.getUser}
              user={this.state.user}
            />
            <Route path="/posts/:id" component={PostDetail} />
            <Route exact path="/test" component={TestCRUD} />
            <Route exact path="/edit" component={EditCRUD} />
            <Route exact path="/users" component={EditUser} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
