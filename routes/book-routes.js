const router = require("express").Router()
const BookModel = require("../model/Book-model")
const Product = require("../model/Book-model")

router.get("/", (req, res, next) => {
  // This route provides all books
  let books
  try {
    books = await BookModel.find()
  } catch (err) {
    console.log(err)
  }

  if (!books) {
    return res.status(404).json({ message: "No books found" })
  }
  return res.status(200).json({ books })
})

module.exports = router
