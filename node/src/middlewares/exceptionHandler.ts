import {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import Locals from "../providers/locals";
import logger from "./logger";

class ExceptionHandler {
  public static routeNotFound(_app: Application): Application {
    _app.use("*", (req: Request, res: Response, next) => {
      const apiPrefix = Locals.loadConfig().apiPrefix;
      logger.warn(`Following route was not found for path ${req.originalUrl}`);
      if (req.xhr || req.originalUrl.includes(`/${apiPrefix}/`)) {
        return res.json({
          error: "Route Not Found. Please check the URL.",
        });
      } else {
        res.status(404);
        return res.render("screens/error404");
      }
    });
    return _app;
  }
  public static clientErrorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    logger.error(err.stack || "");

    if (req.xhr) {
      return res.status(500).send({ error: "Something went wrong!" });
    } else {
      return next(err);
    }
  }
  public static globalErrorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    logger.error(err.stack || "");
    res.status(500);

    const apiPrefix = Locals.loadConfig().apiPrefix;
    if (req.originalUrl.includes(`/${apiPrefix}/`)) {
      // if (err.name && err.name === "UnauthorizedError") {
      //   const innerMessage =
      //     err.inner && err.inner.message ? err.inner.message : undefined;
      //   return res.json({
      //     error: ["Invalid Token!", innerMessage],
      //   });
      // }

      return res.json({
        error: err,
      });
    }

    return res.render("screens/error", {
      title: "Under Maintenance",
    });
  }

  /**
   * Register your error / exception monitoring
   * tools right here ie. before "next(err)"!
   */
  public static logErrors(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    logger.error(err.stack || "");
    return next(err); // call next funciton in the stack
  }
}
export default ExceptionHandler;
