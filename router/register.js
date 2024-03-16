const express = require("express");
const router = express.Router(); // Create a router object
const userControllers = require("../controllers/users");

router.get("/register", userControllers.getRegisterPage);

router.post("/register-post", userControllers.postRegisterPage);

module.exports = router;
