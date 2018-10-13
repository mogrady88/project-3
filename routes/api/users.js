const router = require("express").Router();
const User = require("../../models/user");
const usersController = require("../../controllers/usersController");
const passport = require("../../passport/");

// Matches with "/api/users"
router.route("/").get(usersController.findAll);

// Matches with "/api/users/current"
router.route("/current").get((req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

//User sign up on /api/users/signup
router.route("/signup").post(usersController.create);

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

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
