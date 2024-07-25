require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const { sendTelegramNotification } = require("./utils/telegram");
const projectsRouter = require("./routes/projects");
const port = 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("pages/home", { page: "home" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { page: "about" });
});

app.use("/projects", projectsRouter);

app.get("/contact", (req, res) => {
  res.render("pages/contact", { page: "contact" });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(
    `Received contact form submission: ${name}, ${email}, ${message}`
  );
  sendTelegramNotification(name, email, message);
  res.render("pages/contact", {
    page: "contact",
    message:
      "Hedwig is taking your message to Hogwarts. Harry will respond as soon as possible. Stay magical!",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
