const express = require("express");
const productControllers = require("../controllers/products");

const router = express.Router();

router.get("/profile", (req, res) => {
  res.render("profile", {
    pageTitle: "Profile",
  });
});
