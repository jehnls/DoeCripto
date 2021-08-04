import { Request, Response } from "express";
import { IDonation } from "@src/interfaces/DonationInterface";
import { CreateDonationService } from "@src/services/CreateDonationService";

const createDonationService = new CreateDonationService();
class CreateDonationController {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const donation: IDonation = req.body;
      createDonationService.execute(donation);
    } catch (error) {
      console.log("error", error);
    }
  }
}

export { CreateDonationController };
