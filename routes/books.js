const express = require("express");
const router = express.Router();

const Book = require("../models/books");

//Home
router.get("/", (req, res) => {
  Book.find({})
    .then((books) => {
      res.render("index", { books: books });
    })
    .catch((err) => {
      console.log(err);
    });
});

//New Page
router.get("/books/new", (req, res) => {
  res.render("new");
});

router.post("/books/new", (req, res) => {
  let newBook = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  };
  Book.create(newBook)
    .then((book) => {
      res.redirect("/");
    })
    .catch((err) => console.log("Book : ", book.name, " not added", err));
});

//Edit Page
router.get("/books/edit", (req, res) => {
  res.render("edit");
});

//Search Page
router.get("/books/search", (req, res) => {
  res.render("search", { book: "" });
});
router.get("/books/searchOne", (req, res) => {
  let searchQuery = { name: req.query.name };
  Book.findOne(searchQuery)
    .then((book) => {
      res.render("search", { book: book });
    })
    .catch((err) => console.log(err));
});
module.exports = router;
