import { Router } from "express";
import HomeController from "../controllers/web/home";
import LoginController from "../controllers/web/auth/login";
import SignUpController from "../controllers/web/auth/signup";
import AuthController from "../controllers/web/auth/auth";

const router: Router = Router();
router.get("/", HomeController.indexView);

router.get("/about", HomeController.aboutView);

router.get("/signup", SignUpController.view);
router.post("/signup", SignUpController.perform);

router.get("/login", LoginController.view);
router.post("/login", LoginController.perform);

router.get("/", AuthController.view);
export default router;
