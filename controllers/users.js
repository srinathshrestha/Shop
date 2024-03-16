exports.getLoginPage = (req, res) => {
  res.render("login");
};
exports.postLoginPage = (req, res) => {
  console.log(req.body);
  res.redirect("/");
};

exports.getRegisterPage = (req, res) => {
  res.render("register");
};

exports.postRegisterPage = (req, res) => {
  console.log(req.body);
  res.redirect("/login");
};
