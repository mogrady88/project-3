import axios from "axios";

export default {
  // Gets all books
  getPosts: function() {
    return axios.get("/posts");
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/posts/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/posts/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/posts", bookData);
  }
};
