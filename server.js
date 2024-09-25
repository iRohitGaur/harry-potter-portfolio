require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const clientSessions = require("client-sessions");
const methodOverride = require("method-override");
const { sendTelegramNotification } = require("./utils/telegram");
const projectsRouter = require("./routes/projects");
const authRouter = require("./routes/auth");
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

// Client-sessions middleware setup
app.use(
  clientSessions({
    cookieName: "session",
    secret: process.env.SESSION_SECRET, // Replace with your own secret
    duration: 24 * 60 * 60 * 1000, // 1 day
    activeDuration: 1000 * 60 * 5, // 5 minutes
  })
);

// Middleware to make the user available in all views
app.use((req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user;
  } else {
    res.locals.user = null;
  }
  next();
});

app.get("/", (req, res) => {
  res.render("pages/home", { page: "home" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { page: "about" });
});

app.use("/projects", projectsRouter);
app.use("/auth", authRouter);

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
