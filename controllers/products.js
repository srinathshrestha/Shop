const Product_class = require("../models/product");

exports.getaddProductPage = (req, res) => {
  res.render("bookListing");
};
exports.postAddProduct = (req, res) => {
  // Generate a random number between 1000 and 9999
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const product = new Product_class(
    randomNumber,
    req.body.title,
    req.body.price,
    req.body.shortDesc,
    req.body.longDesc
  );
  product.save();
  res.redirect("/");
};

const prods = Product_class.fetchAll();
exports.bookRoute = (req, res) => {
  const bookId = req.params.id;
  //   console.log(bookId);
  const product = prods.find((book) => book.id == bookId);
  if (!product) {
    return res.status(404).render("404");
  }
  res.render("bookPage", {
    pageTitle: product.title,
    imgPath: `/img/book${bookId}.jpg`,
    bookTitle: product.title,
    price: product.price,
    longDesc: product.longDesc,
    link: `link`,
  });
};

// hompage controller
exports.homePage = (req, res, next) => {
  res.render("homepage", {
    prods: prods,
    pageTitle: "Online book store",
    path: "/",
    hasProducts: prods.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
