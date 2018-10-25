const mongoose = require("mongoose");
var validate = require("mongoose-validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: { type: String, unique: false, required: true },
  password: { type: String, unique: false, required: true },
  email: { type: String, unique: true, required: false, default: null },
  firstName: { type: String, required: false, default: null },
  lastName: { type: String, required: false, default: null },
  title: { type: String, required: false, default: null },
  isActive: {type: Boolean, default: true }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

// Define hooks for pre-findOneAndUpdate
userSchema.pre("findOneAndUpdate", function(next) {
  console.log("This is the pre-findOneAndUpdate " + this.);
  // console.log("models/user.js hashPassword in pre findOneAndUpdate " + this.user.password);
  next();
  // if (this.password) {

  //   this.password = this.hashPassword(this.password);
    // next();
  // }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
