import * as path from "path";
import * as express from "express";

import logger from "./logger";

class StaticFiles {
  public static mount(_app: express.Application): express.Application {
    logger.info("Mounting The Static file middleware: serve static files");

    const options = { maxAge: 31557600000 };

    _app.use(
      "/public",
      express.static(path.join(__dirname, "../../public"), options)
    );
    _app.use(
      "/vendor",
      express.static(path.join(__dirname, "../../node_modules"), options)
    );
    return _app;
  }
}

export default StaticFiles;
