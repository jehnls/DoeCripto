import { Request, Response } from "express";
import { IDonation } from "@src/interfaces/DonationInterface";

class CreateDonationController {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const dontaion = new IDonation(req.body);
    } catch (error) {
      console.log("error", error);
    }

    console.log("Doador", dontaionT);
  }
}

export { CreateDonationController };
