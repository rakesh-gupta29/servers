import { Router } from "express";

const router: Router = Router();
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: " home for api  router" });
});

export default router;
