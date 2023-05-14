import { Response, Request } from "express";
class LogoutController {
  public static perform(req: Request, res: Response) {
    res.json({ message: "logging out the user" });
  }
}
export default LogoutController;
