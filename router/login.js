const express = require("express");
const router = express.Router(); // Create a router object
const userControllers = require("../controllers/users");

router.get("/login", userControllers.getLoginPage);

router.post("/login-post", userControllers.postLoginPage);

module.exports = router;
