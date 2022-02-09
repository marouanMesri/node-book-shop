const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
});

module.exports = mongoose.model("Book", bookSchema);
