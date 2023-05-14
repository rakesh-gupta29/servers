import { Request, Response } from "express";
class Home {
  public static indexView(req: Request, res: Response) {
    //  to be included: how many visits someone has made to the page using req.sessions.counter
    console.log(req.session);
    res.render("screens/index");
  }
  public static aboutView(req: Request, res: Response) {
    res.render("screens/about");
  }
}
export default Home;
