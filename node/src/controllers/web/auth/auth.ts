import { Request, Response } from "express";

class AuthController {
  public static view(req: Request, res: Response) {
    return res.render("screens/dashboard", {
      title: "Dashboard Page",
    });
  }
}
export default AuthController;
