import express, { Application } from "express";
import morgan from "morgan";
import IndexRoutes from "./routes/index.routes";
import PostRoutes from "./routes/posts.routes";

const app = express();

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
  }
  settings() {
    this.app.set(`port`, this.port || process.env.port || 3000);
  }
  routes() {
    this.app.use(IndexRoutes);
    this.app.use("/post", PostRoutes);
  }
  middleware() {
    this.app.use(morgan("dev"));
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("server on port", this.app.get("port"));
  }
}
