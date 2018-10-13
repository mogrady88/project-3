import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getCurrentUser: function(id) {
    return axios.get("/api/users/current");
  },
  // Deletes the book with the given id
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  // Saves a book to the database
  signupUser: function(newUser) {
    console.log("Front-end: userAPI.js:", newUser);
    return axios.post("/api/users/signup", newUser);
  }
};
