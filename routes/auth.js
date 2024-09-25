const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("pages/register", { page: "register" });
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });

  try {
    await user.save();
    res.redirect("/auth/login");
  } catch (error) {
    res.render("pages/register", {
      page: "register",
      error: "User registration failed",
    });
  }
});

router.get("/login", (req, res) => {
  res.render("pages/login", { page: "login" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    res.redirect("/projects");
  } else {
    res.render("pages/login", {
      page: "login",
      error: "Invalid username or password",
    });
  }
});

router.get("/logout", (req, res) => {
  req.session.reset();
  res.redirect("/");
});

module.exports = router;
