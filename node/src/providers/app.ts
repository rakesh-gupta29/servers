import Database from "./database";
import Express from "./express";
class App {
  public loadDB() {
    Database.init();
  }
  public mountAndRunServer() {
    Express.createApp();
  }
}
export default new App();
