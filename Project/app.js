const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./routes/book-routes")
const cors = require("cors")
const app = express()
const passport = require("passport")
const users = require("./routes/users")

//Middlewares
app.use(express.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

// DB Config
const db = require("./configs/keys").mongoURI

// Passport middleware
app.use(passport.initialize())
// Passport config
require("./configs/passports")(passport)
// Routes
app.use("/books", router)
app.use("/api/users", users)

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => console.log(err))
