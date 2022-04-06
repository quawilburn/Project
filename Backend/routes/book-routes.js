const router = require("express").Router()
// const BookModel = require("../model/Book-model")
// const Product = require("../model/Book-model")
const booksMiddleware = require("../middleware/book-middleware")

router.get("/", booksMiddleware.getAllBooks)
router.post("/", booksMiddleware.addBook)
router.get("/:id", booksMiddleware.getById)
router.put("/:id", booksMiddleware.updateBook)
router.delete("/:id", booksMiddleware.deleteBook)

module.exports = router
