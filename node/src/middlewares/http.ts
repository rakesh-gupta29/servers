import * as express from "express";
import * as session from "express-session";
import logger from "./logger";
import Locals from "../providers/locals";
import MongoStore = require("connect-mongo");
class HTTP {
  public static mount(_app: express.Application): express.Application {
    logger.info("Mouting the HTTP middlewares");
    _app.use(express.json()); // parse request body
    _app.disable("x-powered-by"); // tells what kind of server it is
    _app.use(
      session({
        resave: true,
        saveUninitialized: true,
        secret: Locals.loadConfig().appSecret,
        cookie: {
          maxAge: 1209600000, // two weeks
        },
        store: MongoStore.create({
          mongoUrl: Locals.loadConfig().mongooseUrl,
          collectionName: "sessions",
        }),
      })
    );
    return _app;
  }
}
export default HTTP;
