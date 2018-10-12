import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Public from "./pages/Public";
import Private from "./pages/Private";
import NoMatch from "./pages/NoMatch";
import PostDetail from "./pages/PostDetail"

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Public} />
      <Route exact path="/posts/" component={Public} />
      <Route exact path="/posts/:id" component={PostDetail} />
      <Route exact path="/private" component={Private} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
