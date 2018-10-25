import React from "react";
import { Route, Redirect } from "react-router-dom";
import UsersAPI from "../../../utils/usersAPI";

const PrivateRoute = ({
  component: Component,
  path: url,
  loggedIn,
  handleLogout,
  user,
  getUser
}) => {
  // const checkAuth = () => {
  //   UsersAPI.getCurrentUser().then(response => {
  //     console.log("Get user response: ");
  //     console.log(response.data);
  //     console.log("Is user authenticated?", response.data.authenticated);
  //     return response.data.authenticated;
  //   });
  // };
  // const loggedIn = this.props.loggedIn; // user is/is not authenticated
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
