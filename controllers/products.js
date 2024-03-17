const Product_class = require("../models/product");

exports.getaddProductPage = (req, res) => {
  res.render("bookListing");
};

// In your controller

exports.postAddProduct = (req, res) => {
  // Generate a random number between 1000 and 9999
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const product = new Product_class(
    randomNumber,
    req.body.title,
    Number(req.body.price),
    req.body.shortDesc,
    req.body.longDesc
  );
  product.save();
  res.redirect("/");
};

// exports.bookRoute = (req, res) => {
//   const bookId = req.params.id;
//   //   console.log(bookId);
//   const product = prods.find((book) => book.id == bookId);
//   if (!product) {
//     return res.status(404).render("404");
//   }
//   res.render("bookPage", {
//     pageTitle: product.title,
//     imgPath: `/img/book${bookId}.jpg`,
//     bookTitle: product.title,
//     price: product.price,
//     longDesc: product.longDesc,
//     link: `link`,
//   });
// };
exports.bookRoute = (req, res) => {
  const bookId = req.params.id;

  // Fetch all products
  Product_class.fetchAll((products) => {
    // Find the product by ID
    const product = products.find((book) => book.id == bookId);

    // If product not found, render 404 page
    if (!product) {
      return res.status(404).render("404");
    }

    // Render bookPage template with product data
    res.render("bookPage", {
      pageTitle: product.title,
      imgPath: `/img/book${bookId}.jpg`,
      bookTitle: product.title,
      price: product.price,
      longDesc: product.longDesc,
      link: `link`,
    });
  });
};

// hompage controller
exports.homePage = (req, res, next) => {
  Product_class.fetchAll((products) => {
    res.render("homepage", {
      prods: products,
      pageTitle: "Online book store",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
