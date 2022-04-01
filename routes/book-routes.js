const router = require("express").Router()
// const BookModel = require("../model/Book-model")
// const Product = require("../model/Book-model")
const booksController = require("../middleware/book-middleware")

router.get("/", booksController.getAllBooks)
router.post("/", booksController.addBook)
router.get("/:id", booksController.getById)
router.put("/:id", booksController.updateBook)
router.delete("/:id", booksController.deleteBook)

module.exports = router
