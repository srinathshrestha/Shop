const express = require("express");
const router = express.Router(); // Create a router object

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login-post", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
