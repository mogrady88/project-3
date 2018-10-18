import React from "react";
import UsersSidebar from "../../../components/privateComponents/UsersSidebar";
import AddUser from "../../../components/privateComponents/AddUser";

const Users = props => (
  <div>
    <UsersSidebar loadUserSubpage={props.loadUserSubpage} />
    {props.subpage === "view" ? (
      "View Users"
    ) : props.subpage === "add" ? (
      <AddUser
        newUsername={props.newUsername}
        newPassword={props.newPassword}
        handleInputChange={props.handleInputChange}
        handleSignUp={props.handleSignUp}
      />
    ) : (
      "Edit User"
    )}
  </div>
);

export default Users;
