const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const forumRoutes = require("./forums");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/forums", forumRoutes);

module.exports = router;
