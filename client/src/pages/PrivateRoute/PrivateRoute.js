import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, path: url }) => {
  const loggedIn = window.loggedIn; // user is not authenticated

  return (
    <Route
      path={url}
      render={props =>
        loggedIn === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
