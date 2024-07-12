const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("pages/home", { page: "home" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { page: "about" });
});

app.get("/projects", (req, res) => {
  res.render("pages/projects", { page: "projects" });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { page: "contact" });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(
    `Received contact form submission: ${name}, ${email}, ${message}`
  );
  res.render("pages/contact", {
    page: "contact",
    message:
      "Your owl has been sent to Hogwarts. Harry will respond to your message as soon as possible. Stay magical!",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
