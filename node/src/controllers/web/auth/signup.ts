import { Request, Response } from "express";

class SignUpController {
  public static view(req: Request, res: Response) {
    return res.render("screens/signup", {
      title: "Signup Page",
    });
  }
  public static perform(req: Request, res: Response) {}
}
export default SignUpController;
