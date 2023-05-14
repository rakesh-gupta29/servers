import { Application } from "express";
import * as cors from "cors";
import logger from "./logger";
class CORS {
  public static mount(_app: Application): Application {
    logger.info("Mounting the CORS middleware");
    _app.use(cors());
    return _app;
  }
}

export default CORS;
