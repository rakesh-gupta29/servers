import { Request, Response } from "express";

class LoginController {
  public static view(req: Request, res: Response) {
    return res.render("screens/login", {
      title: "Login Page",
    });
  }
  public static perform(req: Request, res: Response) {
    res.json({ message: "will perform the login operation" });
  }
}
export default LoginController;
