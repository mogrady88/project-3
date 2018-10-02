const mongoose = require("mongoose");
var validate = require("mongoose-validator");

var passwordValidator = [
  validate({
    validator: "isLength",
    arguments: [8, undefined],
    message: "Name should be at least {ARGS[0]} characters"
  })
];

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, validate: passwordValidator, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
