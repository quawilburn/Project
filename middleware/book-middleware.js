const Book = require("../model/Book-model")

const getAllBooks = async (req, res, next) => {
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
}

const addBook = async (req, res, next) => {
  const { name, author, description, price, started } = req.body
  let book

  try {
    book = new Book({
      name,
      author,
      description,
      price,
      started,
    })
  } catch (err) {
    console.log(err)
  }
}

exports.getAllBooks = getAllBooks
