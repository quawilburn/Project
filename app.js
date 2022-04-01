const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/book-routes")

const app = express()

//Middlewares
app.use(express.json())
app.use("/", (req, res, next) => {
  res.send("Connected to application")
})

app.use("/books", router)

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
