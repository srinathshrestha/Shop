const express = require("express");
const router = express.Router(); // Create a router object
const productControllers = require("../controllers/products");

router.get("/listBook", productControllers.getaddProductPage);

router.post("/add-book", productControllers.postAddProduct);

module.exports = router;
