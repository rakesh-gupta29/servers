import * as express from "express";
import Middlewares from "../middlewares";
import Routes from "./routes";
import Locals from "./locals";
import logger from "../middlewares/logger";
import ExceptionHandler from "../middlewares/exceptionHandler";
class Express {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.mountEnvConfig();
    this.mountMiddlewares();
    this.mountRoutes();
  }
  mountEnvConfig() {
    this.express = Locals.initConfig(this.express);
  }

  mountMiddlewares() {
    this.express = Middlewares.mountAll(this.express);
  }
  mountRoutes() {
    this.express = Routes.mountWebRoutes(this.express);
    this.express = Routes.mountAPIRoutes(this.express);
  }
  public createApp() {
    logger.info("Creating the App");
    const port = Locals.loadConfig().port;
    this.express.use(ExceptionHandler.clientErrorHandler);
    this.express.use(ExceptionHandler.globalErrorHandler);
    this.express = ExceptionHandler.routeNotFound(this.express);
    this.express
      .listen(port, () => {
        return console.log(`SERVER :: Running @ 'http://localhost:${port}'`);
      })
      .on("error", (_error) => {
        return console.log("Error: ", _error.message);
      });
  }
}

export default new Express();
