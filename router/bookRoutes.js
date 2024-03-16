const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/book/:id", (req, res) => {
  const bookId = req.params.id;
  //   console.log(bookId);
  const product = adminData.products.find((book) => book.id == bookId);
  if (!product) {
    return res.status(404).render("404");
  }
  res.render("bookPage", {
    pageTitle: product.title,
    imgPath: `/img/book${bookId}.jpg`,
    bookTitle: product.title,
    price: product.price,
    longDesc: product.longDesc,
    link: `/book/${product.id}`, // Assuming you want the link to be the same as the book page URL
  });
});

module.exports = router;
