const express = require("express");
const productControllers = require("../controllers/products");

const router = express.Router();

router.get("/", productControllers.homePage);

module.exports = router;
