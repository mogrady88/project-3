const router = require("express").Router();
const User = require("../../models/user");
const usersController = require("../../controllers/usersController");
const passport = require("../../passport/");

// Matches with "/api/users"
router.route("/").get(usersController.findAll);
// .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

//New User validation
// router.post("/", (req, res) => {
//   console.log("user signup");

// const { username, password } = req.body;
// ADD VALIDATION
//   User.findOne({ username: username }, (err, user) => {
//     if (err) {
//       console.log("User.js post error: ", err);
//     } else if (user) {
//       res.json({
//         error: `Sorry, already a user with the username: ${username}`
//       });
//     } else {
//       const newUser = new User({
//         username: username,
//         password: password
//       });
//       newUser.save((err, savedUser) => {
//         if (err) return res.json(err);
//         res.json(savedUser);
//       });
//     }
//   });
// });

//User sign up on /api/users/signup
router.route("/signup").post((req, res) => {
  console.log("user signup");

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password
      });
      usersController.create(newUser);
      // .then((err, savedUser) => {
      //   if (err) return res.json(err);
      //   res.json(savedUser);
      // newUser.save((err, savedUser) => {
      //   if (err) return res.json(err);
      //   res.json(savedUser);
      // });
    }
  });
});

//User login on /api/users/login
router.route("/login").post(
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
);

//User logout on /api/users/logout
router.route("/logout").post((req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
