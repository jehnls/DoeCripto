import express from "express";
import {router} from "@src/routes"


export class serverSetup {
  private app = express();
  constructor(private port = 3000) {}

  private setupExpress(): void {
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
