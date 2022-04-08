import React from "react"
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Book/Home"
import AddBook from "./components/AddBook"
import Books from "./components/Book/Books"
import About from "./components/About"
import BookDetail from "./components/Book/BookDetail"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Logout from "./components/Auth/Logout"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/add" element={<AddBook />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/books/:id" element={<BookDetail />} exact />
          </Routes>
        </Provider>
      </main>
    </React.Fragment>
  )
}

export default App
