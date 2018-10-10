import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Public from "./pages/Public";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Public} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:id" component={Detail} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
