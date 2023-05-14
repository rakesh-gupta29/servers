import * as path from "path";
import { Application } from "express";

import logger from "./logger";

class Views {
  public static mount(_app: Application): Application {
    logger.info("Mounting the Views Middleware");
    _app.locals.pretty = true;
    _app.set("view engine", "ejs");
    _app.set("views", path.join(__dirname, "../../views"));
    return _app;
  }
}

export default Views;
