const express = require("express");
const app = express();

const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const booksRoutes = require("./routes/books");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => console.log("Connected to MongoDB via Mongoose"))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(booksRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is started");
});
