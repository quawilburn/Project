const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose
  .connect(
    "mongodb+srv://new:s6TngXDBZBqLqXlU@cluster0.lq8dw.mongodb.net/Bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => console.log(err))
// s6TngXDBZBqLqXlU
