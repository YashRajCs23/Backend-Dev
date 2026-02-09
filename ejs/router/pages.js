import express from "express";
const router = express.Router();

// home page
router.get("/", (req, res) => {
  res.render("index");
});

// list page
router.get("/list", (req, res) => {
  const arr = ["apple", "banana", "grapes", "mango"];
  res.render("list", { arr });
});

router.get("/display", (req, res) => {
  res.render("display");
});

export default router;