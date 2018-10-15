import React from "react";
import { Route, Redirect } from "react-router-dom";
import Private from "../Private/Private";

const PrivateRoute = ({
  render: Component,
  path: url,
  loggedIn,
  handleLogout
}) => {
  // const loggedIn = this.props.loggedIn; // user is/is not authenticated
  console.log("PrivateRoute.js says loggedIn is " + loggedIn);

  return (
    <Route
      path={url}
      render={props =>
        loggedIn === true ? (
          <Private handleLogout={handleLogout} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
