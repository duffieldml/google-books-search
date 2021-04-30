const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Route to match with "api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.save);

router
    .route("/:id")
    .get(booksController.findOne)
    .delete(booksController.remove);

module.exports = router;