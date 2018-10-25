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
  let session = sessionStorage.getItem("disco-panda");
  console.log("PrivateRoute.js session: " + session);
  console.log("PrivateRoute.js says loggedIn is " + loggedIn);
  return (
    <Route
      path={url}
      render={props =>
        session ? (
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
