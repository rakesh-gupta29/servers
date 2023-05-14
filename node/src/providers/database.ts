import * as mongoose from "mongoose";
import logger from "../middlewares/logger";
import Locals from "./locals";
class Database {
  public static init(): any {
    logger.info("Establishing Database Connection.");

    const dsn = Locals.loadConfig().mongooseUrl;
    mongoose.set("strictQuery", true); // deprecation warning
    mongoose.connect(dsn, {}, (error) => {
      // handle the error case
      if (error) {
        logger.info("Failed to connect to the Mongo server!!");
        console.log(error);
        throw error;
      } else {
        logger.info("connected to Mongo Database at: " + dsn);
      }
    });
  }
}
export default Database;
