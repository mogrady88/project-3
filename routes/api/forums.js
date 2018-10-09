const router = require("express").Router();
const forumsController = require("../../controllers/forumsController");

// Matches with "/api/forums"
router
  .route("/")
  .get(forumsController.findAll)
  .post(forumsController.create);

// Matches with "/api/forums/:id"
router
  .route("/:id")
  .get(forumsController.findById)
  .put(forumsController.update)
  .delete(forumsController.remove);

module.exports = router;