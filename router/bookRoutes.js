const express = require("express");
const productControllers = require("../controllers/products");

const router = express.Router();

router.get("/book/:id", productControllers.bookRoute);

module.exports = router;
