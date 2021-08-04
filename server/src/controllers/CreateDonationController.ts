import { Request, Response } from "express";
import { IDonation } from "@src/interfaces/DonationInterface";

class CreateDonationController {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const donation :IDonation = (req.body);
      console.log("Doador", donation);
    } catch (error) {
      console.log("error", error);
    }

  }
}

export { CreateDonationController };
