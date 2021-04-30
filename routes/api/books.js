const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Route to match with "api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;