const router = require("express").Router()
const BookModel = require("../model/Book-model")
const Product = require("../model/Book-model")
const booksController = require("../middleware/book-middleware")

router.get("/", booksController.getAllBooks)
router.post("/", booksController.addBook)

module.exports = router
