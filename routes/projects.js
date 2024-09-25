const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect("/auth/login");
  }
}

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find({});
  res.render("pages/projects", { page: "projects", projects });
});

// Get form to create a new project
router.get("/new", isLoggedIn, (req, res) => {
  res.render("pages/newProject", { page: "newProject" });
});

// Create a new project
router.post("/", isLoggedIn, async (req, res) => {
  const { title, description, image, technologies } = req.body;
  const project = new Project({
    title,
    description,
    image,
    technologies: technologies.split(",").map((t) => t.trim()),
  });
  await project.save();
  res.redirect("/projects");
});

// Get a single project
router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.render("pages/project", { page: "project", project });
});

// Get form to edit a project
router.get("/:id/edit", isLoggedIn, async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.render("pages/editProject", { page: "project", project });
});

// Update a project
router.put("/:id", isLoggedIn, async (req, res) => {
  const { title, description, image, technologies } = req.body;
  await Project.findByIdAndUpdate(req.params.id, {
    title,
    description,
    image,
    technologies: technologies.split(",").map((t) => t.trim()),
  });
  res.redirect(`/projects/${req.params.id}`);
});

// Delete a project
router.delete("/:id", isLoggedIn, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect("/projects");
});

module.exports = router;
