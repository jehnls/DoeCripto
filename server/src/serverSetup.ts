import express from "express";
import { router } from "@src/routes";
import cors from "cors";

export class serverSetup {
  private app = express();
  constructor(private port = 3001) {}

  private setupExpress(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(router);
  }

  public init(): void {
    this.setupExpress();
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log("Server listening port:" + this.port);
    });
  }
}
