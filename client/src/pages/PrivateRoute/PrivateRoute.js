import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, path: url }) => {
  const loggedIn = window.loggedIn; // user is authenticated

  return (
    <Route
      path={url}
      render={props =>
        loggedIn === false ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
