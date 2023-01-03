import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/landing");
});
router.get("/questions", (req, res) => {
  res.render("pages/questions");
});
router.get("/score", (req, res) => {
  res.render("pages/score");
});
router.get("/email", (req, res) => {
  res.render("pages/authPage");
});

export default router;
