const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const postSeed = [
  {
    title: "Public - The Dead Zone",
    author: "Stephen King"
  },
  {
    title: "Public - Lord of the Flies",
    author: "William Golding"
  },
  {
    title: "Public - The Catcher in the Rye",
    author: "J.D. Salinger"
  },
  {
    title: "Public - The Punch Escrow",
    author: "Tal M. Klein"
  },
  {
    title: "Public - Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
