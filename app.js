const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const rootDir = require("./util/path");
const homepageRoutes = require("./router/homepage");
const listBookRoutes = require("./router/addBook");
const registerRoutes = require("./router/register");
const loginRoutes = require("./router/login");
const bookPageRoutes = require("./router/bookRoutes");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(rootDir + "/public"));

// routes
app.use(bookPageRoutes);
app.use(registerRoutes);
app.use(homepageRoutes);
app.use(listBookRoutes);
app.use(loginRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
