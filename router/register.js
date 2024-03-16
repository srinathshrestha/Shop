const express = require("express");
const router = express.Router(); // Create a router object

router.get("/register", (req, res) => {
  res.render("login");
});

router.post("/register-post", (req, res) => {
  console.log(req.body);
  res.redirect("/login");
});

module.exports = router;
