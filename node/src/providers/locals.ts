import { Application } from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import logger from "../middlewares/logger";

// load and inject the config in the express app
class Locals {
  // injecting env values in app locals
  public static initConfig(_application: Application): Application {
    logger.info("Loading Local Config");
    _application.locals.app = this.loadConfig();
    return _application;
  }
  public static loadConfig() {
    dotenv.config({ path: path.join(__dirname, "../../.env") }); //  direct to local env file
    const port = process.env.RUNTIME_PORT;
    const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
    const isCORSEnabled = process.env.CORS_ENABLED || true;
    const apiPrefix = process.env.API_ROUTES_PREFIX || "api";
    const maxUploadLimit = process.env.MAX_UPLOAD_LIMIT;
    const mongooseUrl = process.env.MONGOOSE_URL || "";
    const appSecret = process.env.APP_SECRET || "";
    return {
      port,
      url,
      isCORSEnabled,
      apiPrefix,
      maxUploadLimit,
      mongooseUrl,
      appSecret,
    };
  }
}

export default Locals;
