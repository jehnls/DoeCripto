import express from "express";

export class serverSetup {
  private app = express();
  constructor(private port = 3000) {}

  private setupExpress(): void {
    this.app.use(express.json());
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
