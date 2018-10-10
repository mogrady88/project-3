import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Public from "./pages/Public";
import Login from "./pages/Login";
import Private from "./pages/Private";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Public} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/private" component={Private} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
