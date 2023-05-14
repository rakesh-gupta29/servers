import { Application } from "express";
import logger from "../middlewares/logger";
import apiRouter from "../router/api";
import webRouter from "../router/web";
import Locals from "./locals";
class Routes {
  public static mountWebRoutes(_app: Application): Application {
    logger.info("Loading Web Routes");
    return _app.use("/", webRouter);
  }
  public static mountAPIRoutes(_app: Application): Application {
    const apiRoutePrefix = Locals.loadConfig().apiPrefix;
    logger.info("Loading API Routes for prefix /" + apiRoutePrefix);
    return _app.use(`/${apiRoutePrefix}`, apiRouter);
  }
}

export default Routes;
