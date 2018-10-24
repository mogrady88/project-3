import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  path: url,
  loggedIn,
  handleLogout,
  user,
  getUser
}) => {
  // const loggedIn = this.props.loggedIn; // user is/is not authenticated
  console.log("PrivateRoute.js says loggedIn is " + loggedIn);

  return (
    <Route
      path={url}
      render={props =>
        loggedIn === true ? (
          <Component
            handleLogout={handleLogout}
            user={user}
            getUser={getUser}
            {...props}
          />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
