const rootDir = require("../util/path");
const express = require("express");
const adminData = require("./admin");
const router = express.Router(); // Create a router object

let products = adminData.products;

router.get("/listBook", (req, res) => {
  res.render("bookListing");
});

router.post("/add-book", (req, res) => {
  console.log(req.body);
  // Add logic to add the book to your products array
  products.push(req.body);
  console.log(products);
  //   res.redirect("/");
});

module.exports = router;
