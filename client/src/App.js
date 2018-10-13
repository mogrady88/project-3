import React from "react";
import axios from "axios";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Public from "./pages/Public";
import Login from "./pages/Login";
import Private from "./pages/Private";
import TestCRUD from "./pages/TestCRUD";
import NoMatch from "./pages/NoMatch";
import PostDetail from "./pages/PostDetail";

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
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/users/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
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
              // component={Login}
              render={props => (
                <Login updateUser={this.updateUser} {...props} />
              )}
            />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/private" component={Private} />
            <Route exact path="/test" component={TestCRUD} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
