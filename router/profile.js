const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/profile", (req, res) => {
  res.render("profile", {
    pageTitle: "Profile",
  });
});
