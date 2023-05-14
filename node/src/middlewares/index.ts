import { Application } from "express";
import CORS from "./cors";
import HTTP from "./http";
import StaticFiles from "./staticFiles";
import Views from "./views";
class Middlewares {
  public static mountAll(_app: Application): Application {
    CORS.mount(_app);
    HTTP.mount(_app);
    StaticFiles.mount(_app);
    Views.mount(_app);

    return _app;
  }
}

export default Middlewares;
