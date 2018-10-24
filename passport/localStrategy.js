const User = require("../models/user");
// const jwt = require("jsonwebtoken");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "username" // not necessary, DEFAULT
  },
  function(username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      // generate a signed son web token with the contents of user object and return it in the response
      // const token = jwt.sign(user, "your_jwt_secret");
      // return res.json({user, token});
      return done(null, user);
    });
  }
);

module.exports = strategy;
